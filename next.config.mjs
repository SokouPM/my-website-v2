import createNextIntlPlugin from "next-intl/plugin"

const withNextIntl = createNextIntlPlugin()

/** @type {import("next").NextConfig} */
const nextConfig = {
  output: "standalone",
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(pdf)$/,
      type: "asset/resource",
    })

    return config
  },
  images: {
    remotePatterns: [{ hostname: "api.microlink.io" }, { hostname: "dummyimage.com" }],
  },
}

export default withNextIntl(nextConfig)
