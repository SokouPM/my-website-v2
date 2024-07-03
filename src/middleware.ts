import createMiddleware from "next-intl/middleware"

export default createMiddleware({
  defaultLocale: "fr",
  locales: ["fr", "en"],
})

export const config = {
  matcher: ["/", "/(fr|en)/:path*", "/((?!_next|_vercel|.*\\..*).*)"],
}
