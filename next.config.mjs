import createNextIntlPlugin from "next-intl/plugin"

const withNextIntl = createNextIntlPlugin()

/** @type {import("next").NextConfig} */
const nextConfig = {
  output: "standalone",
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.(pdf)$/,
      type: "asset/resource"
    })
    return config
  },
  images: {
    domains: ["dummyimage.com", "api.microlink.io"]
  }
}

export default withNextIntl(nextConfig)