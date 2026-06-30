'use client'

// Auth context — Google sign-in via Firebase, shared by every app surface.
// Mirrors the phone PWA's sign-in so the same account links PC ↔ phone data.
import { createContext, useContext, useEffect, useState, type ReactNode } from 'react'
import {
  onAuthStateChanged, signInWithPopup, signInWithRedirect, signOut,
  GoogleAuthProvider, type User as FbUser,
} from 'firebase/auth'
import { getFirebase } from './firebase'

export interface AppUser { uid: string; name: string | null; email: string | null; photo: string | null }

interface AuthApi {
  user: AppUser | null
  ready: boolean                 // auth state resolved at least once
  busy: boolean                  // a sign-in is in flight
  signIn: () => Promise<void>
  signOut: () => Promise<void>
}

const Ctx = createContext<AuthApi>({
  user: null, ready: false, busy: false,
  signIn: async () => {}, signOut: async () => {},
})
export const useAuth = () => useContext(Ctx)

const toUser = (u: FbUser): AppUser => ({ uid: u.uid, name: u.displayName, email: u.email, photo: u.photoURL })

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<AppUser | null>(null)
  const [ready, setReady] = useState(false)
  const [busy, setBusy] = useState(false)

  useEffect(() => {
    const fb = getFirebase()
    if (!fb) { setReady(true); return }
    return onAuthStateChanged(fb.auth, u => { setUser(u ? toUser(u) : null); setReady(true) })
  }, [])

  const signIn = async () => {
    const fb = getFirebase()
    if (!fb) throw new Error('Offline')
    setBusy(true)
    try {
      const provider = new GoogleAuthProvider()
      provider.setCustomParameters({ prompt: 'select_account' })
      try {
        await signInWithPopup(fb.auth, provider)
      } catch (e: any) {
        // Popups are often blocked on mobile / strict browsers → fall back to redirect.
        if (e?.code === 'auth/popup-blocked' || e?.code === 'auth/operation-not-supported-in-this-environment') {
          await signInWithRedirect(fb.auth, provider)
        } else if (e?.code === 'auth/popup-closed-by-user' || e?.code === 'auth/cancelled-popup-request') {
          // user dismissed — not an error
        } else { throw e }
      }
    } finally { setBusy(false) }
  }

  const doSignOut = async () => {
    const fb = getFirebase()
    if (fb) await signOut(fb.auth)
  }

  return <Ctx.Provider value={{ user, ready, busy, signIn, signOut: doSignOut }}>{children}</Ctx.Provider>
}
