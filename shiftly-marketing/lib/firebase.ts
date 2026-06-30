// ─────────────────────────────────────────────────────────────────────────────
// Firebase init — binds the new app to the SAME backend the phone PWA already
// uses (project `workh-cdc4d`). Signing in with the same Google account on PC and
// phone therefore reads/writes the same Firestore user document → cross-device
// sync. Lazy + window-guarded so it never runs during SSR / build.
//
// Config note: the apiKey here is a public client identifier (safe to ship); real
// protection comes from Firebase Auth + Firestore security rules.
// ─────────────────────────────────────────────────────────────────────────────

import { initializeApp, getApps, getApp, type FirebaseApp } from 'firebase/app'
import { getAuth, type Auth } from 'firebase/auth'
import { getFirestore, type Firestore } from 'firebase/firestore'

const config = {
  apiKey: 'AIzaSyBSw70eKBDUDYZkMGvF961sjoMFHwWd-KM',
  authDomain: 'workh-cdc4d.firebaseapp.com',
  projectId: 'workh-cdc4d',
  storageBucket: 'workh-cdc4d.firebasestorage.app',
  messagingSenderId: '775094572168',
  appId: '1:775094572168:web:d25ad278fa785621cbbb3d',
  measurementId: 'G-0P46Q6EYTJ',
}

let cached: { app: FirebaseApp; auth: Auth; db: Firestore } | null = null

/** Returns the initialised Firebase handles, or null on the server. */
export function getFirebase() {
  if (typeof window === 'undefined') return null
  if (!cached) {
    const app = getApps().length ? getApp() : initializeApp(config)
    cached = { app, auth: getAuth(app), db: getFirestore(app) }
  }
  return cached
}
