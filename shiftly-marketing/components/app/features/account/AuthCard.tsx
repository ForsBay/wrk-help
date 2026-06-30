'use client'

// Shared account card — Google sign-in (Firebase) for cross-device sync. Signed
// out: a "Sign in with Google" CTA explaining what it unlocks. Signed in: the
// account + a live "synced across your devices" status + Sign out. Same component
// on desktop and mobile.
import { useAuth } from '@/lib/auth'
import { useT } from '@/lib/appI18n'
import { Icon } from '../../ui/Icon'
import { useToast } from '../../ui/Toast'

export function AuthCard() {
  const { user, busy, signIn, signOut } = useAuth()
  const toast = useToast()
  const t = useT()

  const doSignIn = async () => {
    try { await signIn() }
    catch (e: any) { toast.toast(e?.message || 'Sign-in failed', { tone: 'danger' }) }
  }

  if (user) {
    return (
      <div className="auth-card">
        <span
          className="profile-avatar"
          style={user.photo ? { backgroundImage: `url(${user.photo})`, backgroundSize: 'cover', boxShadow: 'none' } : undefined}
        >
          {!user.photo && <Icon name="user" size={24} />}
        </span>
        <div className="auth-main">
          <div className="profile-name">{user.name || 'Account'}</div>
          <div className="profile-mail">{user.email}</div>
          <div className="auth-sync"><span className="sync-dot on" /> {t('syncedDevices')}</div>
        </div>
        <button className="btn-ghost" onClick={() => signOut()}>{t('signOut')}</button>
      </div>
    )
  }

  return (
    <div className="auth-card">
      <span className="profile-avatar"><Icon name="user" size={24} /></span>
      <div className="auth-main">
        <div className="profile-name">{t('notSignedIn')}</div>
        <div className="profile-mail">{t('syncedDevices')}</div>
      </div>
      <button className="cta-primary" style={{ padding: '10px 16px', fontSize: 14 }} disabled={busy} onClick={doSignIn}>
        <Icon name="user" size={15} /> {busy ? '…' : t('signIn')}
      </button>
    </div>
  )
}
