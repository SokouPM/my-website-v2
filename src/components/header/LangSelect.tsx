"use client"

import { usePathname, useRouter } from "next/navigation"
import { useLocale, useTranslations } from "next-intl"
import { ChangeEvent, ReactElement, useTransition } from "react"

import { langs } from "@/config/langs"

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
    startTransition(() => {
      router.replace(`${nextPath}`)
    })
  }

  return (
    <label>
      <p className="sr-only">{t("lang-selector")}</p>

      <select
        onChange={onSelectChange}
        defaultValue={localActive}
        disabled={isPending}
        className="h-10 cursor-pointer rounded-md border border-input bg-background pl-2 text-sm ring-offset-background focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
      >
        {langs.map((lang, index) => {
          return (
            <option key={index} value={lang.value}>
              {lang.label.flag} {lang.label.text}
            </option>
          )
        })}
      </select>
    </label>
  )
}
