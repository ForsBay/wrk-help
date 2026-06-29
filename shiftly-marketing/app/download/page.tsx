import type { Metadata } from 'next'
import DownloadClient from '@/components/download/DownloadClient'

export const metadata: Metadata = {
  title: 'Download Shiftly',
  description: 'Install Shiftly on your device — we automatically pick the best option for you.',
  alternates: { canonical: '/download' },
}

// The page shell is a Server Component (SEO-friendly metadata); the device-aware
// logic lives in the client island below.
export default function DownloadPage() {
  return <DownloadClient />
}
