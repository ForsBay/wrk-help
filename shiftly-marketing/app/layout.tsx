import type { Metadata } from 'next'
import { Manrope } from 'next/font/google'
import './globals.css'
import SmoothScroll from '@/components/SmoothScroll'
import ScrollProgress from '@/components/ScrollProgress'
import PageIntro from '@/components/PageIntro'
import { LangProvider } from '@/lib/i18n'
import { PerfProvider } from '@/lib/perf-context'
import { PERF_INLINE_SCRIPT } from '@/lib/performance'

const manrope = Manrope({
  subsets: ['latin', 'cyrillic'],
  weight: ['200', '300', '400', '500', '600'],
  variable: '--font-manrope',
  display: 'swap',
})

const BASE_URL = 'https://shiftlytime.com'

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),

  applicationName: 'Shiftly',
  title: {
    default: 'Shiftly | Smart Employee Scheduling',
    template: '%s | Shiftly',
  },
  description:
    'Create employee schedules in minutes. Manage shifts, availability, vacations and payroll from one modern dashboard.',
  keywords: [
    'employee scheduling',
    'shift management',
    'work schedule',
    'staff scheduling software',
    'payroll management',
    'time tracking',
    'workforce management',
    'scheduling app',
  ],
  category: 'Business Software',

  authors: [{ name: 'Shiftly', url: BASE_URL }],
  creator: 'Shiftly',
  publisher: 'Shiftly',

  alternates: {
    canonical: BASE_URL,
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  openGraph: {
    type: 'website',
    url: BASE_URL,
    siteName: 'Shiftly',
    title: 'Shiftly | Smart Employee Scheduling',
    description:
      'Create employee schedules in minutes. Manage shifts, availability, vacations and payroll from one modern dashboard.',
    images: [
      {
        url: '/og.jpg',
        width: 1200,
        height: 630,
        alt: 'Shiftly — Smart Employee Scheduling',
      },
    ],
    locale: 'en_US',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Shiftly | Smart Employee Scheduling',
    description:
      'Create employee schedules in minutes. Manage shifts, availability, vacations and payroll from one modern dashboard.',
    images: ['/og.jpg'],
    creator: '@shiftlyapp',
  },

  icons: {
    icon: [
      { url: '/icon-32.png', sizes: '32x32', type: 'image/png' },
      { url: '/icon.png', sizes: '192x192', type: 'image/png' },
    ],
    apple: [{ url: '/icon.png', sizes: '192x192', type: 'image/png' }],
    shortcut: '/icon-32.png',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${manrope.variable} ${manrope.className}`}>
        {/* Sets <html data-perf> before first paint so heavy effects are gated
            without a flash. Runs synchronously, ahead of the React tree. */}
        <script dangerouslySetInnerHTML={{ __html: PERF_INLINE_SCRIPT }} />
        <PerfProvider>
          <LangProvider>
            <PageIntro />
            <ScrollProgress />
            <SmoothScroll>
              {children}
            </SmoothScroll>
          </LangProvider>
        </PerfProvider>
      </body>
    </html>
  )
}
