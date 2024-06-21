import createMiddleware from "next-intl/middleware"

import { LANGUAGE, locales } from "./i18n"

export default createMiddleware({
  // A list of all locales that are supported
  locales,

  // Used when no locale matches
  defaultLocale: LANGUAGE.FR,
})
export const config = {
  // Match only internationalized pathnames
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)", "/([\\w-]+)?/users/(.+)"],
}
