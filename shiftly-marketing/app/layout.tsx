import type { Metadata } from 'next'
import { Manrope } from 'next/font/google'
import './globals.css'
import SmoothScroll from '@/components/SmoothScroll'
import ScrollProgress from '@/components/ScrollProgress'
import PageIntro from '@/components/PageIntro'
import { LangProvider } from '@/lib/i18n'

const manrope = Manrope({
  subsets: ['latin', 'cyrillic'],
  weight: ['200', '300', '400', '500', '600'],
  variable: '--font-manrope',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Shiftly — Track Hours. Earn More.',
  description:
    'The smartest way to track work hours, calculate salary, manage overtime, and sync with Google Calendar.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${manrope.variable} ${manrope.className}`}>
        <LangProvider>
          <PageIntro />
          <ScrollProgress />
          <SmoothScroll>
            {children}
          </SmoothScroll>
        </LangProvider>
      </body>
    </html>
  )
}
