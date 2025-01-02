import { getRequestConfig } from "next-intl/server"
import { notFound } from "next/navigation"

import languages from "@/data/Languages"
import LanguagesInterface from "@/interfaces/languages"

export const locales: string[] = [...languages.map((language: LanguagesInterface): string => language.value)]

export default getRequestConfig(async ({ locale }): Promise<{ messages: Record<string, string> }> => {
  if (!locales.includes(locale as string)) notFound()

  return {
    messages: (await import(`../messages/${locale}.json`)).default,
  }
})
