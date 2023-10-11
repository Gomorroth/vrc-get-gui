/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: {
      disableStaticImages: true,
    },
    experimental: {
      serverActions: true,
    },
    webpack(config) {
        const fileLoaderRule = config.module.rules.find((rule) =>
          rule.test?.test?.('.svg'),
        )
    
        config.module.rules.push(
          {
            ...fileLoaderRule,
            test: /\.svg$/i,
            resourceQuery: /url/, // *.svg?url
          },
          {
            test: /\.svg$/i,
            issuer: /\.[jt]sx?$/,
            resourceQuery: { not: /url/ },
            use: ['@svgr/webpack'],
          },
        )
    
        if (fileLoaderRule)
        fileLoaderRule.exclude = /\.svg$/i
    
        return config
      },
}

module.exports = nextConfig
