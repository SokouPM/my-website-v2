"use client"

import { usePathname, useRouter } from "next/navigation"
import { useLocale } from "next-intl"
import { ReactElement, useTransition } from "react"

import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { langs } from "@/config/langs"

export default function LangSelect(): ReactElement {
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

  const onSelectChange = (lang: string): void => {
    const nextPath = redirectedPathName(lang)
    startTransition((): void => {
      router.replace(nextPath)
    })
  }

  return (
    <Select defaultValue={localActive} onValueChange={onSelectChange} disabled={isPending}>
      <SelectTrigger>
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {langs.map((lang, index) => {
            return (
              <SelectItem key={index} value={lang.value}>
                {lang.label.flag} {lang.label.text}
              </SelectItem>
            )
          })}
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
