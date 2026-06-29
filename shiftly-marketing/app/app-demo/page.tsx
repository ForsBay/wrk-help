import type { Metadata } from 'next'
import AppShell from '@/components/app/AppShell'

// Demo route mounting the adaptive app shell. Open on a desktop → full table +
// sidebars + hotkeys; open on a phone (or DevTools device mode) → bottom nav +
// large cards. Same code, resolved by the Platform Service.
export const metadata: Metadata = { title: 'App preview', robots: { index: false } }

export default function AppDemoPage() {
  return <AppShell />
}
