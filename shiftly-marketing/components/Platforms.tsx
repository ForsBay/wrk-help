'use client'

import { motion } from 'framer-motion'

const platforms = [
  {
    name: 'Windows',
    type: 'Desktop App',
    description: 'Full-featured desktop experience with system tray integration, native notifications, and offline support.',
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
        <rect x="4" y="4" width="19" height="19" rx="2" fill="#60a5fa"/>
        <rect x="25" y="4" width="19" height="19" rx="2" fill="#60a5fa" opacity="0.8"/>
        <rect x="4" y="25" width="19" height="19" rx="2" fill="#60a5fa" opacity="0.8"/>
        <rect x="25" y="25" width="19" height="19" rx="2" fill="#60a5fa" opacity="0.6"/>
      </svg>
    ),
    badge: 'Available',
    version: 'v2.4.1',
  },
  {
    name: 'Android',
    type: 'Mobile App',
    description: 'Native Android app with widget support, background tracking, and Google Calendar integration.',
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
        <path d="M8 32C8 35.3 10.7 38 14 38H16V44C16 45.7 17.3 47 19 47C20.7 47 22 45.7 22 44V38H26V44C26 45.7 27.3 47 29 47C30.7 47 32 45.7 32 44V38H34C37.3 38 40 35.3 40 32V18H8V32Z" fill="#60a5fa"/>
        <path d="M4 18C4 19.7 5.3 21 7 21C8.7 21 10 19.7 10 18V9C10 7.3 8.7 6 7 6C5.3 6 4 7.3 4 9V18Z" fill="#60a5fa" opacity="0.7"/>
        <path d="M44 18C44 19.7 42.7 21 41 21C39.3 21 38 19.7 38 18V9C38 7.3 39.3 6 41 6C42.7 6 44 7.3 44 9V18Z" fill="#60a5fa" opacity="0.7"/>
        <path d="M14 5.5L12 2M34 5.5L36 2" stroke="#60a5fa" strokeWidth="2" strokeLinecap="round"/>
        <path d="M14 14C14 13.4 14.4 13 15 13C15.6 13 16 13.4 16 14C16 14.6 15.6 15 15 15C14.4 15 14 14.6 14 14ZM32 14C32 13.4 32.4 13 33 13C33.6 13 34 13.4 34 14C34 14.6 33.6 15 33 15C32.4 15 32 14.6 32 14Z" fill="white"/>
        <path d="M16 2h16v14H16z" fill="#60a5fa" opacity="0.3"/>
        <rect x="16" y="2" width="16" height="14" rx="1" fill="none" stroke="#60a5fa" strokeWidth="0.5"/>
      </svg>
    ),
    badge: 'Available',
    version: 'v2.4.0',
  },
  {
    name: 'iOS',
    type: 'Mobile App',
    description: 'Polished iOS app with Shortcuts support, Live Activities, and seamless Apple Calendar integration.',
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
        <path d="M32 4C32 8.4 28.8 12 24.4 12H22C19.8 12 18 10.2 18 8V4H32Z" fill="#60a5fa" opacity="0.6"/>
        <rect x="12" y="10" width="24" height="34" rx="4" fill="#60a5fa" opacity="0.15" stroke="#60a5fa" strokeWidth="1.5"/>
        <path d="M24 18v6l4 2" stroke="#60a5fa" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M17 32h14" stroke="#60a5fa" strokeWidth="1.2" strokeLinecap="round" opacity="0.5"/>
        <path d="M17 36h10" stroke="#60a5fa" strokeWidth="1.2" strokeLinecap="round" opacity="0.3"/>
        <circle cx="24" cy="24" r="6" stroke="#60a5fa" strokeWidth="1.5"/>
      </svg>
    ),
    badge: 'Available',
    version: 'v2.3.8',
  },
  {
    name: 'Web',
    type: 'Browser App',
    description: 'Access Shiftly from any browser. No install required — full functionality with cloud sync.',
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
        <circle cx="24" cy="24" r="18" stroke="#60a5fa" strokeWidth="1.5"/>
        <ellipse cx="24" cy="24" rx="8" ry="18" stroke="#60a5fa" strokeWidth="1.5" opacity="0.6"/>
        <path d="M6 24h36" stroke="#60a5fa" strokeWidth="1.5" opacity="0.5"/>
        <path d="M8 16h32M8 32h32" stroke="#60a5fa" strokeWidth="1" opacity="0.3"/>
      </svg>
    ),
    badge: 'Available',
    version: 'v2.4.1',
  },
]

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
}

export default function Platforms() {
  return (
    <section className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-500/20 bg-blue-500/10 text-blue-400 text-sm mb-6">
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <rect x="1" y="1" width="4" height="4" rx="0.5" fill="currentColor"/>
              <rect x="7" y="1" width="4" height="4" rx="0.5" fill="currentColor" opacity="0.7"/>
              <rect x="1" y="7" width="4" height="4" rx="0.5" fill="currentColor" opacity="0.7"/>
              <rect x="7" y="7" width="4" height="4" rx="0.5" fill="currentColor" opacity="0.5"/>
            </svg>
            All platforms
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-5 tracking-tight">
            Works everywhere you work
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            One account, all your devices. Your data stays in sync no matter where you clock in.
          </p>
        </motion.div>

        {/* Platform Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {platforms.map((platform) => (
            <motion.div
              key={platform.name}
              variants={cardVariants}
              whileHover={{
                y: -8,
                transition: { duration: 0.2 },
              }}
              className="group bg-white/[0.03] border border-white/[0.08] rounded-2xl p-8 hover:border-blue-500/30 hover:shadow-[0_20px_60px_rgba(59,130,246,0.1)] transition-all duration-300 cursor-default flex flex-col"
            >
              {/* Icon */}
              <div className="mb-6">
                {platform.icon}
              </div>

              {/* Badge */}
              <div className="flex items-center gap-1.5 mb-4">
                <div className="w-1.5 h-1.5 rounded-full bg-green-400 shadow-[0_0_6px_rgba(74,222,128,0.8)]" />
                <span className="text-green-400 text-xs font-medium">{platform.badge}</span>
                <span className="text-slate-600 text-xs ml-auto">{platform.version}</span>
              </div>

              {/* Name & Type */}
              <h3 className="text-xl font-bold text-white mb-1 group-hover:text-blue-100 transition-colors duration-300">
                {platform.name}
              </h3>
              <div className="text-blue-400/70 text-xs font-medium mb-3 uppercase tracking-wide">
                {platform.type}
              </div>

              {/* Description */}
              <p className="text-slate-400 text-sm leading-relaxed flex-1">
                {platform.description}
              </p>

              {/* CTA */}
              <div className="mt-6 pt-5 border-t border-white/5">
                <button className="w-full py-2.5 rounded-xl bg-white/[0.04] border border-white/[0.08] text-slate-300 hover:text-white hover:bg-white/[0.08] text-sm font-medium transition-all duration-200 group-hover:border-blue-500/20">
                  Download
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
