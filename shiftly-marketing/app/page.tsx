'use client'

import dynamic from 'next/dynamic'
import { useLang }   from '@/lib/i18n'
import Nav         from '@/components/Nav'
import Hero        from '@/components/Hero'
import CalendarSheet from '@/components/CalendarSheet'
import FlipSection from '@/components/FlipSection'

// Above-the-fold (Nav + Hero) ships in the initial chunk. Everything below the
// fold is code-split with next/dynamic so it doesn't weigh down first load /
// TTI. ssr:true keeps the HTML for SEO while still splitting the client JS.
// (bundle-dynamic-imports — Vercel react-best-practices)
const Features     = dynamic(() => import('@/components/Features'))
const Stats        = dynamic(() => import('@/components/Stats'))
const Comparison   = dynamic(() => import('@/components/Comparison'))
const Testimonials = dynamic(() => import('@/components/Testimonials'))
const CTA          = dynamic(() => import('@/components/CTA'))
const Footer       = dynamic(() => import('@/components/Footer'))

export default function Home() {
  const { t } = useLang()

  return (
    <main>
      <Nav />
      <Hero />
      <CalendarSheet tab={t.nav.features}><Features /></CalendarSheet>
      <FlipSection><Stats /></FlipSection>
      <Testimonials />
      <CalendarSheet tab={t.nav.compare}><Comparison /></CalendarSheet>
      <CalendarSheet tab={t.nav.download}><CTA /></CalendarSheet>
      <Footer />
    </main>
  )
}
