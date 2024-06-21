"use client"

import { usePathname, useRouter } from "next/navigation"
import { useLocale } from "next-intl"
import { ReactElement, useTransition } from "react"

import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function LangSelect(): ReactElement {
  const [isPending, startTransition] = useTransition()
  const router = useRouter()
  const pathName = usePathname()
  const localActive = useLocale()
  const langs = [
    {
      label: {
        flag: "🇫🇷",
        text: "Français",
      },
      value: "fr",
    },
    {
      label: {
        flag: "🇺🇸",
        text: "English",
      },
      value: "en",
    },
  ]

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
          {langs.map((item, index) => {
            return (
              <SelectItem key={index} value={item.value}>
                {item.label.flag} {item.label.text}
              </SelectItem>
            )
          })}
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
