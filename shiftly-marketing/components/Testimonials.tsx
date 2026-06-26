'use client'

import { motion } from 'framer-motion'

const testimonials = [
  {
    quote: "Shiftly changed how I manage my freelance work. I finally know exactly how much I earn per day.",
    name: "Alex M.",
    role: "Freelancer",
    avatar: "AM",
    avatarColor: "from-blue-500 to-indigo-600",
    stars: 5,
  },
  {
    quote: "The Google Calendar sync is seamless. I've recommended it to my whole team and everyone loves it.",
    name: "Sarah K.",
    role: "Team Lead",
    avatar: "SK",
    avatarColor: "from-violet-500 to-purple-600",
    stars: 5,
  },
  {
    quote: "Best shift tracker I've used in 6 years. The salary calculator alone is worth downloading for.",
    name: "Marcus R.",
    role: "Nurse",
    avatar: "MR",
    avatarColor: "from-emerald-500 to-teal-600",
    stars: 5,
  },
  {
    quote: "Finally an app that handles overtime properly. Simple, reliable, and the UI is beautiful.",
    name: "Diana P.",
    role: "Engineer",
    avatar: "DP",
    avatarColor: "from-rose-500 to-pink-600",
    stars: 5,
  },
  {
    quote: "I used to track hours in a notebook. Shiftly replaced that completely and I save 30 minutes every week.",
    name: "Tom H.",
    role: "Construction Manager",
    avatar: "TH",
    avatarColor: "from-orange-500 to-amber-600",
    stars: 5,
  },
  {
    quote: "The analytics dashboard is incredible. I can see exactly where my time goes each month.",
    name: "Priya N.",
    role: "Consultant",
    avatar: "PN",
    avatarColor: "from-cyan-500 to-blue-600",
    stars: 5,
  },
]

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} width="14" height="14" viewBox="0 0 14 14" fill="none">
          <path
            d="M7 1.5l1.4 3.2 3.4.5-2.4 2.4.6 3.4L7 9.4l-3 1.6.6-3.4L2.2 5.2l3.4-.5L7 1.5z"
            fill="#fbbf24"
          />
        </svg>
      ))}
    </div>
  )
}

function TestimonialCard({ testimonial }: { testimonial: typeof testimonials[number] }) {
  return (
    <div className="flex-shrink-0 w-80 bg-white/[0.03] border border-white/[0.08] rounded-2xl p-6 mx-3">
      {/* Stars */}
      <div className="mb-4">
        <StarRating count={testimonial.stars} />
      </div>

      {/* Quote */}
      <p className="text-slate-300 text-sm leading-relaxed italic mb-6">
        &ldquo;{testimonial.quote}&rdquo;
      </p>

      {/* Author */}
      <div className="flex items-center gap-3">
        <div
          className={`w-10 h-10 rounded-full bg-gradient-to-br ${testimonial.avatarColor} flex items-center justify-center text-white text-xs font-bold flex-shrink-0`}
        >
          {testimonial.avatar}
        </div>
        <div>
          <div className="text-white font-semibold text-sm">{testimonial.name}</div>
          <div className="text-slate-500 text-xs">{testimonial.role}</div>
        </div>
      </div>
    </div>
  )
}

export default function Testimonials() {
  const duplicated = [...testimonials, ...testimonials]

  return (
    <section className="py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-500/20 bg-blue-500/10 text-blue-400 text-sm mb-6">
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path d="M3 5h2l-1-3H2L1 5v4h2V5zm7 0h2l-1-3H9L8 5v4h2V5z" fill="currentColor" opacity="0.8"/>
            </svg>
            What users say
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-5 tracking-tight">
            Loved by shift workers everywhere
          </h2>
          <p className="text-lg text-slate-400 max-w-xl mx-auto">
            Join thousands of professionals who track their work hours smarter with Shiftly.
          </p>
        </motion.div>
      </div>

      {/* Scroll Track */}
      <div className="relative">
        {/* Edge fades */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#030712] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#030712] to-transparent z-10 pointer-events-none" />

        <div className="flex scroll-track">
          {duplicated.map((t, i) => (
            <TestimonialCard key={`${t.name}-${i}`} testimonial={t} />
          ))}
        </div>
      </div>

      {/* Average rating */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="flex justify-center mt-16"
      >
        <div className="flex flex-col items-center gap-3">
          <div className="flex gap-1">
            {[1, 2, 3, 4, 5].map((i) => (
              <svg key={i} width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path
                  d="M10 2L12 7.5H17.5L13 11L15 17L10 13.5L5 17L7 11L2.5 7.5H8L10 2Z"
                  fill="#fbbf24"
                />
              </svg>
            ))}
          </div>
          <div className="text-slate-400 text-sm">
            <span className="text-white font-semibold">4.9 out of 5</span> — based on 2,400+ reviews
          </div>
        </div>
      </motion.div>
    </section>
  )
}
