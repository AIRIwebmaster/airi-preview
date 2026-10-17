const createNextIntlPlugin = require('next-intl/plugin');
const withNextIntl = createNextIntlPlugin('./src/i18n/request.ts');

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'airifoundation.org',
      },
    ],
  },
  async redirects() { return [
    {source:'/programs',destination:'/community-services',permanent:true},
    {source:'/programs/seniors',destination:'/community-services/seniors',permanent:true},
    {source:'/programs/code-ai-club',destination:'/community-services/code-ai-club',permanent:true},
    {source:'/solutions',destination:'/technical-implementation',permanent:true},
    {source:'/programs/professionals',destination:'/technical-implementation',permanent:true},
    {source:'/programs/new-canadians',destination:'/community-services',permanent:true},
    {source:'/programs/:path*',destination:'/community-services',permanent:false},
    {source:'/fr/programs',destination:'/fr/community-services',permanent:true,locale:false},
    {source:'/fr/programs/seniors',destination:'/fr/community-services/seniors',permanent:true,locale:false},
    {source:'/fr/programs/code-ai-club',destination:'/fr/community-services/code-ai-club',permanent:true,locale:false},
  ]; },
  headers: async () => [
    {
      source: '/(.*)',
      headers: [
        // { key: 'X-Frame-Options', value: 'DENY' },
        { key: 'X-Content-Type-Options', value: 'nosniff' },
        { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
        { key: 'X-DNS-Prefetch-Control', value: 'on' },
        {
          key: 'Strict-Transport-Security',
          value: 'max-age=63072000; includeSubDomains; preload',
        },
        {
          key: 'Permissions-Policy',
          value: 'camera=(), microphone=(), geolocation=()',
        },
        {
  key: 'Content-Security-Policy',
  value: [
    "default-src 'self'",
    "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://challenges.cloudflare.com https://script.google.com https://script.googleusercontent.com",
    "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://cdn.jsdelivr.net",
    "font-src 'self' https://fonts.gstatic.com https://cdn.jsdelivr.net data:",
    "img-src 'self' data: https://airifoundation.org",
    "frame-src 'self' https://www.youtube.com https://www.youtube-nocookie.com https://challenges.cloudflare.com",
    "connect-src 'self' https://challenges.cloudflare.com https://script.google.com https://script.googleusercontent.com",
  ].join('; '),
}
      ],
    },
  ],
};

module.exports = withNextIntl(nextConfig);