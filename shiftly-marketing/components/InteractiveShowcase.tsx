'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

// ─── Easing ─────────────────────────────────────────────────────────────────
const ease = [0.16, 1, 0.3, 1] as const

// ─── Phone Frame ─────────────────────────────────────────────────────────────
function PhoneFrame({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="relative flex-shrink-0 overflow-hidden"
      style={{
        width: 256,
        height: 532,
        borderRadius: 40,
        background: '#0b1220',
        border: '1px solid rgba(255,255,255,0.07)',
        boxShadow: '0 50px 120px rgba(0,0,0,0.85), 0 0 0 1px rgba(255,255,255,0.03), inset 0 1px 0 rgba(255,255,255,0.05)',
      }}
    >
      <div className="absolute -right-px top-24 w-0.5 h-7 bg-white/[0.07] rounded-full" />
      <div className="absolute -left-px top-20 w-0.5 h-5 bg-white/[0.07] rounded-full" />
      <div className="absolute -left-px top-[104px] w-0.5 h-9 bg-white/[0.07] rounded-full" />
      <div className="absolute top-[10px] left-1/2 -translate-x-1/2 w-[68px] h-[14px] bg-black rounded-full z-20" />
      <div className="absolute inset-0 pointer-events-none z-10" style={{ background: 'linear-gradient(130deg, rgba(255,255,255,0.025) 0%, transparent 45%)' }} />
      <div className="h-full overflow-hidden" style={{ paddingTop: 30 }}>
        {children}
      </div>
    </div>
  )
}

// ─── Calendar Screen ──────────────────────────────────────────────────────────
type ShiftEntry = [number, string | null, string | null, string?]
const WEEKS: ShiftEntry[] = [
  [1,'9h','283zł'],[2,'8.5h','267zł'],[3,'8.5h','267zł'],[4,null,null],[5,'8.5h','267zł'],[6,null,null,'sat'],[7,'8h','251zł','sun'],
  [8,'9h','283zł'],[9,'8.5h','267zł'],[10,'8.5h','267zł'],[11,null,null],[12,null,null],[13,'0h',null,'sat'],[14,'0h',null,'sun'],
  [15,'9h','283zł'],[16,'8.5h','267zł'],[17,'8.5h','267zł'],[18,'9h','283zł'],[19,'11h','345zł'],[20,null,null,'sat'],[21,'7h','220zł','sun'],
  [22,'9h','283zł'],[23,'8.5h','267zł'],[24,'8h+2','345zł','today'],[25,null,null],[26,null,null],[27,null,null,'sat'],[28,null,null,'sun'],
  [29,null,null],[30,null,null],
]

function CalendarScreen() {
  return (
    <div className="flex flex-col h-full text-white">
      <div className="flex items-center justify-between px-3 pt-2 pb-2 flex-shrink-0">
        <div>
          <div className="text-[6.5px] text-slate-500 uppercase tracking-[0.18em]">TIME TRACKING</div>
          <div className="font-bold text-[13px] tracking-tight">Shiftly</div>
        </div>
        <div className="flex items-center gap-1">
          <div className="w-6 h-6 rounded-full bg-gradient-to-br from-purple-700 to-indigo-900 border border-white/10 flex items-center justify-center overflow-hidden">
            <svg width="12" height="12" viewBox="0 0 16 16" fill="none"><circle cx="8" cy="6" r="3.5" fill="#475569"/><ellipse cx="8" cy="13" rx="5.5" ry="3.5" fill="#475569"/></svg>
          </div>
          <div className="w-6 h-6 rounded-lg flex items-center justify-center" style={{background:'rgba(255,255,255,0.06)',border:'1px solid rgba(255,255,255,0.06)'}}>
            <svg width="10" height="10" viewBox="0 0 12 12" fill="none"><rect x="1" y="7" width="2" height="4" rx="0.5" fill="#22d3ee"/><rect x="5" y="4" width="2" height="7" rx="0.5" fill="#22d3ee"/><rect x="9" y="1" width="2" height="10" rx="0.5" fill="#22d3ee"/></svg>
          </div>
          <div className="w-6 h-6 rounded-lg flex items-center justify-center" style={{background:'rgba(255,255,255,0.06)',border:'1px solid rgba(255,255,255,0.06)'}}>
            <svg width="10" height="10" viewBox="0 0 12 12" fill="none"><circle cx="6" cy="6" r="2" stroke="#94a3b8" strokeWidth="1.2"/><path d="M6 1v1.5M6 9.5V11M1 6h1.5M9.5 6H11" stroke="#94a3b8" strokeWidth="0.9" strokeLinecap="round"/></svg>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between px-5 py-0.5 flex-shrink-0">
        <span className="text-slate-400 text-base leading-none">‹</span>
        <span className="font-semibold text-[11px]">June 2026</span>
        <span className="text-slate-400 text-base leading-none">›</span>
      </div>

      <div className="grid grid-cols-7 px-1.5 mb-0.5 flex-shrink-0">
        {['MON','TUE','WED','THU','FRI','SAT','SUN'].map(d => (
          <div key={d} className={`text-center text-[6.5px] font-semibold py-0.5 ${d==='SAT'||d==='SUN'?'text-red-400/60':'text-slate-500'}`}>{d}</div>
        ))}
      </div>

      <div className="grid grid-cols-7 gap-[2px] px-1.5 flex-1 content-start">
        {WEEKS.map(([day, hrs, pay, type]) => {
          const isToday = type === 'today'
          const isWeekend = type === 'sat' || type === 'sun'
          const hasShift = hrs !== null
          return (
            <div key={String(day)} className="rounded flex flex-col items-center justify-center py-0.5" style={{
              minHeight: 47,
              background: isToday ? 'rgba(245,158,11,0.12)' : hasShift ? 'rgba(255,255,255,0.03)' : 'transparent',
              border: isToday ? '1px solid rgba(245,158,11,0.4)' : hasShift ? '1px solid rgba(255,255,255,0.04)' : '1px solid transparent',
            }}>
              <div className={`text-[7.5px] font-semibold mb-[1px] ${isWeekend?'text-red-400/60':isToday?'text-amber-400':'text-slate-300'}`}>{String(day)}</div>
              {hasShift ? (
                <>
                  <div className={`text-[6.5px] font-bold ${isToday?'text-amber-300':'text-cyan-400'}`}>{String(hrs)}</div>
                  {pay && <div className="text-[5.5px] text-emerald-400">{String(pay)}</div>}
                  {isToday && <div className="text-[5px] text-amber-400/60">plan</div>}
                </>
              ) : (
                <div className="text-[9px] text-slate-700/60">+</div>
              )}
            </div>
          )
        })}
      </div>

      <div className="flex-shrink-0 mt-1 border-t border-white/[0.05] pt-1.5 pb-1.5 flex justify-around">
        {[['18','DAYS','text-white'],['138.5','HOURS','text-white'],['4443','ZŁ','text-cyan-400']].map(([v,l,c]) => (
          <div key={l} className="text-center">
            <div className={`text-[12px] font-bold ${c}`}>{v}</div>
            <div className="text-[6px] text-slate-500">{l}</div>
          </div>
        ))}
      </div>
      <div className="text-center text-[6.5px] text-slate-600 pb-2 flex-shrink-0">31.4 zł/hr</div>
    </div>
  )
}

// ─── Stats Screen ─────────────────────────────────────────────────────────────
const MONTHS = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']
const BARS   = [0,0,0,0,0,139,0,0,0,0,0,0]

function StatsScreen() {
  return (
    <div className="flex flex-col h-full text-white">
      <div className="flex items-center justify-between px-3 pt-2 pb-1.5 flex-shrink-0">
        <div className="w-6 h-6 rounded-lg flex items-center justify-center" style={{background:'rgba(255,255,255,0.06)',border:'1px solid rgba(255,255,255,0.06)'}}>
          <svg width="9" height="9" viewBox="0 0 10 10" fill="none"><path d="M6.5 2L3 5l3.5 3" stroke="#94a3b8" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </div>
        <span className="font-bold text-[13px]">Statistics</span>
        <div className="w-6 h-6 rounded-lg flex items-center justify-center" style={{background:'rgba(255,255,255,0.06)',border:'1px solid rgba(255,255,255,0.06)'}}>
          <svg width="9" height="9" viewBox="0 0 10 10" fill="none"><path d="M5 1v5.5M2.5 4.5L5 7.5l2.5-3" stroke="#94a3b8" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </div>
      </div>
      <div className="flex items-center justify-between px-6 py-0.5 flex-shrink-0">
        <span className="text-slate-400 text-sm leading-none">‹</span>
        <span className="font-semibold text-[11px]">2026</span>
        <span className="text-slate-400 text-sm leading-none">›</span>
      </div>
      <div className="flex gap-1.5 px-2.5 py-1.5 flex-shrink-0">
        {[['18','DAYS','text-white'],['138.5','HOURS','text-white'],['4443','ZŁ','text-cyan-400']].map(([v,l,c]) => (
          <div key={l} className="flex-1 rounded-xl py-1.5 text-center" style={{background:'rgba(255,255,255,0.04)',border:'1px solid rgba(255,255,255,0.05)'}}>
            <div className={`text-[11px] font-bold ${c}`}>{v}</div>
            <div className="text-[6px] text-slate-500">{l}</div>
          </div>
        ))}
      </div>
      <div className="flex gap-0.5 mx-2.5 mb-1.5 p-0.5 rounded-xl flex-shrink-0" style={{background:'rgba(255,255,255,0.04)'}}>
        <div className="flex-1 text-center py-1 rounded-lg text-[9px] font-semibold text-black" style={{background:'white'}}>Hours</div>
        <div className="flex-1 text-center py-1 text-slate-400 text-[9px]">Earnings</div>
      </div>
      <div className="px-2.5 flex-shrink-0">
        <div className="flex items-end gap-[3px] h-14">
          {BARS.map((h, i) => (
            <div key={i} className="flex-1 flex flex-col items-center gap-0.5">
              {i === 5 && h > 0 && <span className="text-[5px] text-slate-400">{h}</span>}
              <div className="w-full rounded-t-[2px]" style={{ height: h > 0 ? `${(h/139)*52}px` : '2px', background: i===5 ? '#22d3ee' : 'rgba(255,255,255,0.05)' }} />
            </div>
          ))}
        </div>
        <div className="flex gap-[3px] mt-1">
          {MONTHS.map((m, i) => <div key={m} className={`flex-1 text-center text-[5px] ${i===5?'text-cyan-400':'text-slate-700'}`}>{m}</div>)}
        </div>
      </div>
      <div className="flex-1 overflow-hidden mx-2.5 mt-1.5">
        <div className="grid grid-cols-4 text-[6px] text-slate-500 font-medium pb-1 mb-0.5 px-1" style={{borderBottom:'1px solid rgba(255,255,255,0.05)'}}>
          {['MONTH','DAYS','HOURS','EARNINGS'].map((h,i) => <div key={h} className={i>0?'text-right':''}>{h}</div>)}
        </div>
        {MONTHS.map((m, i) => (
          <div key={m} className={`grid grid-cols-4 text-[7px] py-[3px] px-1 rounded ${i===5?'bg-white/[0.04]':''}`}>
            <div className={i===5?'text-cyan-400 font-semibold':'text-slate-500'}>{i===5?'June':m}</div>
            <div className={`text-right ${i===5?'text-white font-semibold':'text-slate-700'}`}>{i===5?'18':'—'}</div>
            <div className={`text-right ${i===5?'text-white font-semibold':'text-slate-700'}`}>{i===5?'138.5':'—'}</div>
            <div className={`text-right ${i===5?'text-cyan-400 font-semibold':'text-slate-700'}`}>{i===5?'4443zł':'—'}</div>
          </div>
        ))}
        <div className="grid grid-cols-4 text-[7px] py-[3px] px-1 font-bold mt-0.5" style={{borderTop:'1px solid rgba(255,255,255,0.05)'}}>
          <div className="text-white">Total</div><div className="text-right text-white">18</div><div className="text-right text-white">138.5</div><div className="text-right text-cyan-400">4443zł</div>
        </div>
      </div>
    </div>
  )
}

// ─── Settings Screen ──────────────────────────────────────────────────────────
function SettingsScreen() {
  const rowBg = { background:'rgba(255,255,255,0.04)', border:'1px solid rgba(255,255,255,0.06)' }
  const rowActive = { background:'rgba(34,211,238,0.06)', border:'1px solid rgba(34,211,238,0.25)' }

  return (
    <div className="flex flex-col h-full text-white px-3 pt-2">
      <div className="text-[13px] font-bold text-center mb-3 flex-shrink-0">Settings</div>
      {[
        { label:'HOURLY RATE', content: (
          <div className="flex items-center gap-1 rounded-xl px-3 py-2" style={rowBg}>
            <span className="flex-1 font-semibold text-[13px]">31,4</span>
            <div className="flex flex-col gap-0.5 mr-2">
              {['▲','▼'].map(a=><div key={a} className="w-3 h-3 rounded flex items-center justify-center text-[6px] text-slate-400" style={{background:'rgba(255,255,255,0.08)'}}>{a}</div>)}
            </div>
            <span className="text-cyan-400 font-bold text-[13px]">zł</span>
          </div>
        )},
        { label:'CURRENCY', content: (
          <div className="flex items-center rounded-xl px-3 py-2" style={rowActive}>
            <span className="flex-1 text-cyan-400 text-[10px] font-medium">Polish Zloty</span>
            <span className="text-cyan-400/50 text-[9px] mr-1">zł PLN</span>
            <span className="text-slate-500 text-[8px]">▼</span>
          </div>
        )},
        { label:'LANGUAGE', content: (
          <div className="flex items-center rounded-xl px-3 py-2" style={rowActive}>
            <span className="flex-1 text-cyan-400 text-[10px] font-medium">English</span>
            <span className="text-cyan-400/50 text-[9px] mr-1">EN</span>
            <span className="text-slate-500 text-[8px]">▼</span>
          </div>
        )},
        { label:'THEME', content: (
          <div className="flex rounded-xl p-0.5" style={rowBg}>
            <div className="flex-1 py-1.5 text-center rounded-lg text-[9px] font-semibold text-white" style={{background:'#1a2535'}}>Dark</div>
            <div className="flex-1 py-1.5 text-center text-slate-500 text-[9px]">Light</div>
          </div>
        )},
        { label:'CALENDAR SYNC', content: (
          <>
            <div className="flex justify-end mb-0.5">
              <div className="flex items-center gap-1"><div className="w-1.5 h-1.5 rounded-full bg-green-400"/><span className="text-[6.5px] text-green-400 font-semibold">SYNCED</span></div>
            </div>
            <div className="flex rounded-xl p-0.5" style={rowBg}>
              <div className="flex-1 py-1.5 text-center text-slate-500 text-[9px]">Off</div>
              <div className="flex-1 py-1.5 text-center rounded-lg text-[9px] font-semibold text-white" style={{background:'#1a2535'}}>On</div>
            </div>
          </>
        )},
        { label:'EXPORT DATA', content: (
          <div className="rounded-xl px-3 py-2.5 text-center" style={rowBg}>
            <span className="text-white text-[10px] font-semibold">Full backup (JSON)</span>
          </div>
        )},
      ].map(({ label, content }) => (
        <div key={label} className="mb-2">
          <div className="text-[6.5px] text-slate-500 uppercase tracking-[0.15em] mb-1">{label}</div>
          {content}
        </div>
      ))}
    </div>
  )
}

// ─── Profile Screen ───────────────────────────────────────────────────────────
function ProfileScreen() {
  return (
    <div className="flex flex-col h-full text-white items-center px-3">
      <div className="w-8 h-1 rounded-full bg-white/20 mt-2 mb-3 flex-shrink-0" />
      <div className="text-[13px] font-bold mb-4 flex-shrink-0">Profile</div>
      <div className="w-16 h-16 rounded-full mb-3 flex-shrink-0 flex items-center justify-center overflow-hidden" style={{background:'linear-gradient(135deg,#6d28d9,#1e3a5f)',border:'2px solid rgba(255,255,255,0.12)'}}>
        <svg width="30" height="30" viewBox="0 0 32 32" fill="none"><circle cx="16" cy="11" r="7" fill="#334155"/><ellipse cx="16" cy="25" rx="11" ry="7" fill="#334155"/></svg>
      </div>
      <div className="text-[12px] font-bold mb-0.5 text-center">Vladyslv Shuldik (Seamori)</div>
      <div className="text-[9px] text-slate-400 mb-1.5">suldikvlad04@gmail.com</div>
      <div className="flex items-center gap-1.5 mb-5 flex-shrink-0">
        <div className="w-1.5 h-1.5 rounded-full bg-green-400"/><span className="text-[9px] text-green-400 font-medium">Synced</span>
      </div>
      <div className="w-full rounded-xl p-2 flex-shrink-0" style={{background:'rgba(255,255,255,0.03)',border:'1px solid rgba(255,255,255,0.06)'}}>
        <div className="grid grid-cols-5 gap-1">
          {['EN','RU','PL','UK','DE','FR','ES','TR','IT','KK'].map(l => (
            <div key={l} className="rounded-lg py-1.5 text-center text-[9px] font-semibold" style={l==='EN'?{background:'#2563eb',color:'white'}:{background:'rgba(255,255,255,0.05)',color:'#64748b'}}>{l}</div>
          ))}
        </div>
      </div>
      <div className="mt-auto pb-3 w-full flex-shrink-0">
        <div className="rounded-xl py-3 text-center text-[11px] font-semibold" style={{background:'rgba(239,68,68,0.1)',border:'1px solid rgba(239,68,68,0.25)',color:'#f87171'}}>Sign out</div>
      </div>
    </div>
  )
}

// ─── Floating Badge ───────────────────────────────────────────────────────────
function Badge({ label, value, top, left, right, delay = 0 }: {
  label: string; value: string; top: string; left?: string; right?: string; delay?: number
}) {
  return (
    <motion.div
      animate={{ y: [0,-6,0] }}
      transition={{ duration: 3.5 + delay * 0.5, repeat: Infinity, ease:'easeInOut', delay }}
      className="absolute hidden xl:flex items-center gap-2 px-3 py-2 rounded-xl"
      style={{ top, left, right, background:'rgba(255,255,255,0.04)', border:'1px solid rgba(255,255,255,0.08)', backdropFilter:'blur(12px)', zIndex:10 }}
    >
      <div className="flex flex-col">
        <span className="text-[10px] text-slate-400">{label}</span>
        <span className="text-[12px] font-bold text-white">{value}</span>
      </div>
    </motion.div>
  )
}

// ─── Feature Row ─────────────────────────────────────────────────────────────
interface BadgeDef { label: string; value: string; top: string; left?: string; right?: string; delay?: number }
interface Feature {
  num: string; tag: string; headline: string; description: string
  points: string[]; badges: BadgeDef[]; Screen: React.FC; phoneRight: boolean
}

function FeatureRow({ feature }: { feature: Feature }) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-10% 0px' })
  const { phoneRight } = feature

  const textAnim  = { hidden:{ opacity:0, x: phoneRight ? -40 : 40 }, show:{ opacity:1, x:0, transition:{ duration:0.85, ease }} }
  const phoneAnim = { hidden:{ opacity:0, x: phoneRight ? 40 : -40, y:16 }, show:{ opacity:1, x:0, y:0, transition:{ duration:0.85, delay:0.12, ease }} }
  const listAnim  = { hidden:{}, show:{ transition:{ staggerChildren:0.08, delayChildren:0.3 }} }
  const itemAnim  = { hidden:{ opacity:0, x:-14 }, show:{ opacity:1, x:0, transition:{ duration:0.5, ease }} }

  const TextSide = () => (
    <motion.div variants={textAnim} initial="hidden" animate={inView ? 'show' : 'hidden'} className="flex flex-col justify-center">
      <div className="flex items-center gap-2 mb-5">
        <span className="text-[11px] font-mono text-blue-400/50">{feature.num}</span>
        <div className="w-px h-3 bg-blue-500/20" />
        <span className="text-[11px] font-semibold tracking-widest text-blue-400 uppercase">{feature.tag}</span>
      </div>
      <h3 className="text-4xl md:text-5xl font-bold text-white leading-[1.08] tracking-tight mb-5">{feature.headline}</h3>
      <p className="text-[17px] text-slate-400 leading-relaxed mb-8 max-w-md">{feature.description}</p>
      <motion.ul variants={listAnim} initial="hidden" animate={inView ? 'show' : 'hidden'} className="flex flex-col gap-3">
        {feature.points.map(pt => (
          <motion.li key={pt} variants={itemAnim} className="flex items-center gap-3">
            <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0" style={{background:'rgba(59,130,246,0.12)',border:'1px solid rgba(59,130,246,0.25)'}}>
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M2 5l2.5 2.5L8 2" stroke="#60a5fa" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </div>
            <span className="text-[15px] text-slate-300">{pt}</span>
          </motion.li>
        ))}
      </motion.ul>
    </motion.div>
  )

  const PhoneSide = () => (
    <motion.div variants={phoneAnim} initial="hidden" animate={inView ? 'show' : 'hidden'} className="flex justify-center items-center relative">
      <div className="absolute inset-0 pointer-events-none" style={{ background:'radial-gradient(ellipse 70% 50% at 50% 85%, rgba(37,99,235,0.15) 0%, transparent 70%)', filter:'blur(20px)' }} />
      <PhoneFrame><feature.Screen /></PhoneFrame>
      {feature.badges.map(b => <Badge key={b.label} {...b} />)}
    </motion.div>
  )

  return (
    <div ref={ref} className="relative py-20 md:py-28">
      <div className="absolute inset-0 pointer-events-none" style={{ background:'radial-gradient(ellipse 80% 60% at 50% 50%, rgba(10,20,44,0.5) 0%, transparent 70%)' }} />
      <div className="relative max-w-7xl mx-auto px-6 md:px-10">
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center ${!phoneRight ? 'lg:[&>*:first-child]:order-2 lg:[&>*:last-child]:order-1' : ''}`}>
          <TextSide />
          <PhoneSide />
        </div>
      </div>
    </div>
  )
}

// ─── Data ────────────────────────────────────────────────────────────────────
const FEATURES: Feature[] = [
  {
    num:'01', tag:'CALENDAR', phoneRight:true,
    headline:'Every shift, perfectly organized.',
    description:'See your entire month at a glance. Days worked, earnings per shift, and planned hours — all in one clean calendar view.',
    points:['Monthly calendar with daily earnings','Planned shifts highlighted separately','Weekly & monthly totals at a glance'],
    badges:[
      { label:'This month', value:'138.5h', top:'15%', left:'-8%', delay:0 },
      { label:'Earned in June', value:'4,443 zł', top:'65%', right:'-6%', delay:1 },
    ],
    Screen: CalendarScreen,
  },
  {
    num:'02', tag:'ANALYTICS', phoneRight:false,
    headline:'Know exactly what you earn.',
    description:'Visual charts and monthly breakdowns let you spot trends instantly. Switch between hours and earnings with one tap.',
    points:['Annual overview by month','Hours and earnings comparison','Export your data anytime'],
    badges:[
      { label:'Annual hours', value:'138.5h', top:'20%', right:'-7%', delay:0.5 },
      { label:'Total 2026', value:'4,443 zł', top:'65%', left:'-6%', delay:1.2 },
    ],
    Screen: StatsScreen,
  },
  {
    num:'03', tag:'SETTINGS', phoneRight:true,
    headline:'Set up in 30 seconds.',
    description:"Enter your rate, pick your currency and language — and you're done. Shiftly adapts to how you work.",
    points:['Hourly rate with any currency','Multi-language interface','Dark and light theme'],
    badges:[
      { label:'Your rate', value:'31.4 zł/hr', top:'18%', left:'-8%', delay:0 },
      { label:'Languages', value:'10 supported', top:'70%', right:'-6%', delay:0.8 },
    ],
    Screen: SettingsScreen,
  },
  {
    num:'04', tag:'SYNC', phoneRight:false,
    headline:'Your shifts on every device.',
    description:'Cloud sync keeps all your data safe and up to date. Google Calendar automatically reflects every shift you log.',
    points:['Real-time cloud backup','Google Calendar integration','Works on iOS, Android & Web'],
    badges:[
      { label:'Status', value:'● Live sync', top:'22%', right:'-7%', delay:0.3 },
      { label:'Platforms', value:'iOS · Android · Web', top:'68%', left:'-5%', delay:1 },
    ],
    Screen: ProfileScreen,
  },
]

// ─── Main Export ──────────────────────────────────────────────────────────────
export default function InteractiveShowcase() {
  const titleRef = useRef<HTMLDivElement>(null)
  const titleInView = useInView(titleRef, { once: true, margin: '-10%' })

  return (
    <div className="relative">
      {/* Edge decoration lines */}
      <div className="absolute left-0 inset-y-0 w-px pointer-events-none hidden xl:block" style={{background:'linear-gradient(to bottom,transparent,rgba(59,130,246,0.07) 15%,rgba(59,130,246,0.07) 85%,transparent)'}} />
      <div className="absolute right-0 inset-y-0 w-px pointer-events-none hidden xl:block" style={{background:'linear-gradient(to bottom,transparent,rgba(59,130,246,0.07) 15%,rgba(59,130,246,0.07) 85%,transparent)'}} />

      {/* Title */}
      <div ref={titleRef} className="max-w-4xl mx-auto px-6 text-center pt-24 pb-4">
        <motion.div initial={{opacity:0,y:24}} animate={titleInView?{opacity:1,y:0}:{}} transition={{duration:0.7,ease}}>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-6 text-[11px] font-semibold text-blue-400 tracking-widest uppercase" style={{background:'rgba(37,99,235,0.08)',border:'1px solid rgba(37,99,235,0.18)'}}>
            Features
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-white leading-tight tracking-tight mb-5">
            Every feature,<br />
            <span className="bg-gradient-to-r from-blue-400 via-blue-500 to-indigo-400 bg-clip-text text-transparent">beautifully designed.</span>
          </h2>
          <p className="text-[18px] text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Built for people who take their work seriously. Clean, fast, and everything you need.
          </p>
        </motion.div>
      </div>

      {/* Rows */}
      {FEATURES.map((f, i) => (
        <div key={f.num}>
          {i > 0 && (
            <div className="relative flex items-center justify-center py-6">
              <div className="absolute inset-x-0 h-px" style={{background:'linear-gradient(to right,transparent,rgba(255,255,255,0.05) 30%,rgba(255,255,255,0.05) 70%,transparent)'}} />
              <div className="relative w-1.5 h-1.5 rounded-full" style={{background:'rgba(59,130,246,0.4)',boxShadow:'0 0 10px rgba(59,130,246,0.5)'}} />
            </div>
          )}
          <FeatureRow feature={f} />
        </div>
      ))}
    </div>
  )
}
