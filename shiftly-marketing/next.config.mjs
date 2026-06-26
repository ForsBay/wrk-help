/** @type {import('next').NextConfig} */
const config = {
  // Canonical app URL is /app/ (with slash) so the document sits *inside* the
  // service-worker scope (/app/) and the PWA works offline + updates correctly.
  // /app (no slash) auto-redirects to /app/.
  trailingSlash: true,
  async rewrites() {
    return [
      // Integrated Shiftly web app — static PWA served from public/app.
      { source: '/app', destination: '/app/index.html' },
      { source: '/app/', destination: '/app/index.html' },
    ]
  },
}
export default config
