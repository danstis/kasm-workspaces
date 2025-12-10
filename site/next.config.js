/** @type {import('next').NextConfig} */

const nextConfig = {
  output: 'export',
  distDir: '../public',
  env: {
    name: 'danstis Images',
    description: 'My Kasm Workspaces.',
    icon: '/img/logo.svg',
    listUrl: 'https://danstis.github.io/kasm-workspaces/',
    contactUrl: 'https://github.com/danstis/kasm-workspaces/issues',
  },
  reactStrictMode: true,
  basePath: '/kasm-registry/1.0',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
