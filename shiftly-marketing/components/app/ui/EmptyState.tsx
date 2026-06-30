// SHARED empty state. A calm, branded "nothing here yet" surface — soft accent
// glyph in a ring, a clear title, a one-line explanation, and an optional action.
// Reused by the mobile lists and the desktop context panel so empties feel
// designed rather than blank.
import { Icon, type IconName } from './Icon'

export function EmptyState({ icon, title, body, actionLabel, onAction, compact }: {
  icon: IconName
  title: string
  body?: string
  actionLabel?: string
  onAction?: () => void
  compact?: boolean
}) {
  return (
    <div className={`empty${compact ? ' empty-compact' : ''}`}>
      <span className="empty-glyph"><Icon name={icon} size={compact ? 20 : 26} /></span>
      <div className="empty-title">{title}</div>
      {body && <p className="empty-body">{body}</p>}
      {actionLabel && onAction && (
        <button className="cta-primary empty-action" onClick={onAction}>
          <Icon name="plus" size={16} /> {actionLabel}
        </button>
      )}
    </div>
  )
}
