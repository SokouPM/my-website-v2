"use client"

import { useLocale, useTranslations } from "next-intl"
import { usePathname, useRouter } from "next/navigation"
import { ChangeEvent, ReactElement, useTransition } from "react"

import { langs } from "@/interfaces/langs"

export default function LangSelect(): ReactElement {
  const t = useTranslations("header")
  const [isPending, startTransition] = useTransition()
  const router = useRouter()
  const pathName = usePathname()
  const localActive = useLocale()

  const redirectedPathName = (locale: string): string => {
    if (!pathName) return "/"

    const segments = pathName.split("/")
    segments[1] = locale

    return segments.join("/")
  }

  const onSelectChange = (e: ChangeEvent<HTMLSelectElement>): void => {
    const nextLocale = e.target.value
    const nextPath = redirectedPathName(nextLocale)
    startTransition((): void => {
      router.replace(`${nextPath}`)
    })
  }

  return (
    <select
      onChange={onSelectChange}
      defaultValue={localActive}
      aria-label={t("lang-selector")}
      disabled={isPending}
      name="lang-selector"
      className="h-10 cursor-pointer border border-input bg-background px-2 text-sm ring-offset-background focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
    >
      {langs.map((lang, index) => {
        return (
          <option key={index} value={lang.value}>
            {lang.label.flag} {lang.label.text}
          </option>
        )
      })}
    </select>
  )
}
