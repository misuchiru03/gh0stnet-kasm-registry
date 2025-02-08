/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    name: 'gh0stnet',
    description: 'The official gh0stnet store for Kasm supported workspaces.',
    icon: '/img/logo.svg',
    listUrl: 'https://misuchiru03.github.io/gh0stnet-registry/',
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
