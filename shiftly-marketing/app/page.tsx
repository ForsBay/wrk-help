'use client'

import { useLang }   from '@/lib/i18n'
import Nav         from '@/components/Nav'
import Hero        from '@/components/Hero'
import Features    from '@/components/Features'
import Stats       from '@/components/Stats'
import Comparison  from '@/components/Comparison'
import CTA         from '@/components/CTA'
import Footer      from '@/components/Footer'
import FlipSection from '@/components/FlipSection'
import CalendarSheet from '@/components/CalendarSheet'

export default function Home() {
  const { t } = useLang()

  return (
    <main>
      <Nav />
      <Hero />
      <CalendarSheet tab={t.nav.features}><Features /></CalendarSheet>
      <FlipSection><Stats /></FlipSection>
      <CalendarSheet tab={t.nav.compare}><Comparison /></CalendarSheet>
      <CalendarSheet tab={t.nav.download}><CTA /></CalendarSheet>
      <Footer />
    </main>
  )
}
