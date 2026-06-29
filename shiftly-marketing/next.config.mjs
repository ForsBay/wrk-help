import withBundleAnalyzer from '@next/bundle-analyzer'

/** @type {import('next').NextConfig} */
const config = {
  // Canonical app URL is /app/ (with slash) so the document sits *inside* the
  // service-worker scope (/app/) and the PWA works offline + updates correctly.
  // /app (no slash) auto-redirects to /app/.
  trailingSlash: true,

  // Serve modern image formats from next/image (smallest first).
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [360, 414, 640, 768, 1024, 1280, 1536, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256],
  },

  // Smaller client bundles: import only what's used from these big libs.
  // (bundle-barrel-imports — Vercel react-best-practices)
  experimental: {
    optimizePackageImports: ['framer-motion', 'gsap'],
  },

  async rewrites() {
    return [
      // Integrated Shiftly web app — static PWA served from public/app.
      { source: '/app', destination: '/app/index.html' },
      { source: '/app/', destination: '/app/index.html' },
    ]
  },
}

// `ANALYZE=true npm run build` opens an interactive treemap of every chunk so
// regressions in bundle size are caught before they ship.
export default withBundleAnalyzer({ enabled: process.env.ANALYZE === 'true' })(config)
