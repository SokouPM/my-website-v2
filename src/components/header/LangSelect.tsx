"use client"

import { useLocale, useTranslations } from "next-intl"
import { usePathname, useRouter } from "next/navigation"
import { ChangeEvent, ReactElement, useTransition } from "react"

import { LangInterface, langs } from "@/interfaces/langs"
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime"

export default function LangSelect(): ReactElement {
  const t = useTranslations("header")
  const [isPending, startTransition] = useTransition()
  const router: AppRouterInstance = useRouter()
  const pathName: string = usePathname()
  const localActive: string = useLocale()

  const redirectedPathName = (locale: string): string => {
    if (!pathName) return "/"

    const segments: string[] = pathName.split("/")
    segments[1] = locale

    return segments.join("/")
  }

  const onSelectChange = (e: ChangeEvent<HTMLSelectElement>): void => {
    const nextLocale: string = e.target.value
    const nextPath: string = redirectedPathName(nextLocale)
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
      {langs.map((lang: LangInterface, index: number): ReactElement => {
        return (
          <option key={index} value={lang.value}>
            {lang.label.flag} {lang.label.text}
          </option>
        )
      })}
    </select>
  )
}
