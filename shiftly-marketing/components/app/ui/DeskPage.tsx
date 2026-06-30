// Shared desktop "section page" frame — a consistent header (title + subtitle +
// optional action) over a width-constrained body. Used by every non-calendar
// desktop tab (Statistics, Integrations, Export, Settings, Profile) so they share
// one layout language with the Dashboard.
import type { ReactNode } from 'react'

export function DeskPage({ title, subtitle, action, width = 'wide', children }: {
  title: string
  subtitle?: string
  action?: ReactNode
  width?: 'narrow' | 'wide'
  children: ReactNode
}) {
  return (
    <div className="dpage">
      <header className="dash-head">
        <div>
          <h1 className="dash-title">{title}</h1>
          {subtitle && <p className="dash-sub">{subtitle}</p>}
        </div>
        {action}
      </header>
      <div className={`dpage-body ${width}`}>{children}</div>
    </div>
  )
}
