/* eslint-disable */

import { notFound } from "next/navigation"
import { getRequestConfig } from "next-intl/server"

export enum LANGUAGE {
  EN = "en",
  FR = "fr",
}

export const locales = [LANGUAGE.FR, LANGUAGE.EN]

export default getRequestConfig(async ({ locale }) => {
  if (!locales.includes(locale as any)) notFound()

  return {
    messages: (await import(`../messages/${locale}.json`)).default,
    timeZone: locale === "fr" ? "Europe/Paris" : "America/New_York",
  }
})
