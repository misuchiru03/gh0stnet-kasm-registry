/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    name: 'gh0stnet',
    description: 'Kasm workspaces provided by gh0stnet.',
    icon: 'https://www.gh0stnet.com/images/logo.svg',
    listUrl: 'https://misuchiru03.github.io/gh0stnet-registry',
    contactUrl: 'https://kasmweb.com/support',
  },
  reactStrictMode: true,
  swcMinify: true,
  basePath: '/gh0stnet-registry/1.0',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
