import type { ViewId } from '../nav'
import type { ShiftsContext } from '../features/shifts/useShifts'

// Contract every platform shell receives. State is LIFTED into AppShell and
// injected, so Desktop and Mobile shells share the exact same data + actions and
// only differ in layout (composition-patterns: state-lift-state).
export interface ShellProps {
  active: ViewId
  onSelect: (v: ViewId) => void
  shifts: ShiftsContext
}
