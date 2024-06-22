/* eslint-disable */

import { notFound } from "next/navigation"
import { getRequestConfig } from "next-intl/server"
import { langs } from "@/config/langs"

export let locales = [...langs.map((lang) => lang.value)]

export default getRequestConfig(async ({ locale }) => {
  if (!locales.includes(locale as string)) notFound()

  return {
    messages: (await import(`../messages/${locale}.json`)).default,
    timeZone: locale === "fr" ? "Europe/Paris" : "America/New_York",
  }
})
