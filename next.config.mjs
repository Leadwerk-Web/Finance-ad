/** @type {import('next').NextConfig} */
const isProd = process.env.GITHUB_ACTIONS === 'true'

const nextConfig = {
  output: 'export',
  basePath: isProd ? '/Finance-ad' : '',
  assetPrefix: isProd ? '/Finance-ad/' : '',
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
}

export default nextConfig
