import createMiddleware from "next-intl/middleware"

import { locales } from "@/i18n"

export default createMiddleware({
  defaultLocale: locales[0],
  locales,
})

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)", "/([\\w-]+)?/users/(.+)"],
}
