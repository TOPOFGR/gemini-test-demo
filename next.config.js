/** @type {import('next').NextConfig} */
module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com',
        port: '',
        pathname: '**'
      }
    ]
  },
  async headers() {
    return [
      {
        // Match all routes
        source: '/:path*', // This matches all paths
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'ALLOW-FROM *' // Allow embedding from any domain, or specify a domain
          }
        ]
      }
    ]
  }
}
