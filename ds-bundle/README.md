# ShiftlyMarketing (shiftly-marketing@1.0.0)

This design system is the published shiftly-marketing React library, bundled as a single
browser global. All 10 components are the real upstream code.

## Where things are

- `_ds_bundle.js` — the whole-DS bundle at the project root; loads every component to `window.ShiftlyMarketing`. First line is a `/* @ds-bundle: … */` metadata header.
- `styles.css` — the single stylesheet entry: it `@import`s the tokens, fonts, and component styles (`_ds_bundle.css`). Link this one file.
- `components/<group>/<Name>/<Name>.prompt.md` (example JSX + variants), `<Name>.d.ts` (types), `<Name>.html` (variant grid).
- `tokens/*.css` — CSS custom properties, names verbatim from upstream.
- `fonts/` — `@font-face` files + `fonts.css` (when the package ships fonts).

For a specific component, `read_file("components/<group>/<Name>/<Name>.prompt.md")`.

## Loading

Add these two lines to your page once (React must be on the page first):

```html
<link rel="stylesheet" href="styles.css">
<script src="_ds_bundle.js"></script>
```

Components are then available at `window.ShiftlyMarketing.*`. Mount into a dedicated child node (e.g. `<div id="ds-root">`), not the host page's own React root, so the two trees don't collide:

```jsx
const { Comparison } = window.ShiftlyMarketing;
ReactDOM.createRoot(document.getElementById('ds-root')).render(<Comparison />);
```

## Tokens

68 CSS custom properties from shiftly-marketing. Names are
preserved verbatim from upstream. They are declared inside `_ds_bundle.css` (this DS ships one compiled stylesheet rather than separate token files).

- **color** (15): `--tw-border-spacing-x`, `--tw-border-spacing-y`, `--tw-ring-offset-color`, …
- **spacing** (1): `--tw-ring-inset`
- **shadow** (4): `--tw-ring-offset-shadow`, `--tw-ring-shadow`, `--tw-shadow`, …
- **other** (48): `--tw-translate-x`, `--tw-translate-y`, `--tw-rotate`, …

## Components

### general
- `Comparison`
- `CtaSection`
- `Features`
- `Footer`
- `Hero`
- `InteractiveShowcase`
- `Nav`
- `Platforms`
- `Stats`
- `Testimonials`
