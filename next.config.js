const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  nextScriptWorkers: true,
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    domains: ['apipostagem.builderseunegocioonline.com.br'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'apipostagem.builderseunegocioonline.com.br',
        port: '',
        pathname: '/files/**',
      },
    ],
  },
}

module.exports = nextConfig