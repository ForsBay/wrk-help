# Shiftly Marketing — design-sync notes

## First sync: 2026-06-23

### Component name quirks
- `CTA` component (CTA.tsx) is exported as `CtaSection` in components/index.ts because
  the converter's PascalCase detector rejects all-uppercase names. The alias is stable — do not change it.

### Fake self-install workaround
- `shiftly-marketing/node_modules/shiftly-marketing/` is a synthetic directory (not a real npm install).
  It contains a `package.json` pointing to `../../components/index.ts` as the entry, and
  `globals.css` — the compiled Tailwind output needed as cssEntry.
- Re-generate the Tailwind CSS if globals.css changes:
  ```bash
  cd shiftly-marketing && npx tailwindcss -i app/globals.css -o node_modules/shiftly-marketing/globals.css
  ```
- Then rebuild: `node .ds-sync/package-build.mjs --config .design-sync/config.json --node-modules ./shiftly-marketing/node_modules --out ./ds-bundle`

### Config paths resolve relative to PKG_DIR
- PKG_DIR = `shiftly-marketing/node_modules/shiftly-marketing`
- `tsconfig: "../../tsconfig.json"` → resolves to `shiftly-marketing/tsconfig.json`
- `cssEntry: "globals.css"` → resolves to the compiled Tailwind file in PKG_DIR
- `srcDir: "../../components"` → resolves to `shiftly-marketing/components`

### Emit template patched for dark theme
- `.ds-sync/lib/emit.mjs` lines 133 and 210 changed from `background:#fff` to `background:#030712`
  to match Shiftly's dark theme. Re-stage scripts from skill base dir and re-apply this patch
  if the skill version is bumped.

### Excluded components (behaviour-only, no visual output)
- BackgroundScene — canvas aurora animation, no DOM structure
- CustomCursor — JS cursor follower only
- SmoothScroll — Lenis wrapper only

### Render check
- 9/10 components render real visual output; 1 shows typographic floor card (likely Nav, which is
  `position: fixed` and may collapse to 0 height in the preview iframe).
- Playwright is installed in `.ds-sync/node_modules/playwright`.

### Re-sync command
```bash
cd c:/Users/Vlado/Documents/GitHub/wrk-help
cd shiftly-marketing && npx tailwindcss -i app/globals.css -o node_modules/shiftly-marketing/globals.css && cd ..
node .ds-sync/package-build.mjs --config .design-sync/config.json --node-modules ./shiftly-marketing/node_modules --out ./ds-bundle
node .ds-sync/package-validate.mjs ./ds-bundle
# then upload via DesignSync or run: node .ds-sync/resync.mjs
```
