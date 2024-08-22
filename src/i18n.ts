import { notFound } from "next/navigation"
import { getRequestConfig } from "next-intl/server"

import { langs } from "@/interfaces/langs"

export const locales: string[] = [...langs.map((lang) => lang.value)]

export default getRequestConfig(async ({ locale }): Promise<{ messages: Record<string, string> }> => {
  if (!locales.includes(locale as string)) notFound()

  return {
    messages: (await import(`../messages/${locale}.json`)).default,
  }
})
