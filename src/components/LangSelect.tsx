"use client"

import { ReactElement, useState } from "react"

import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface langsInterface {
  value: string
  label: {
    flag: string
    text: string
  }
}

export default function LangSelect(): ReactElement {
  const [lang, setLang] = useState<string>("fr")
  const langs: langsInterface[] = [
    { value: "fr", label: { flag: "🇫🇷", text: "Français" } },
    { value: "en", label: { flag: "🇺🇸", text: "English" } },
  ]

  return (
    <Select value={lang} onValueChange={setLang}>
      <SelectTrigger>
        <SelectValue placeholder="Choisir une langue" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {langs.map((item, index) => {
            return (
              <SelectItem key={index} value={item.value}>
                <span className="flex gap-2">
                  {item.label.flag} <span className="hidden md:block">{item.label.text}</span>
                </span>
              </SelectItem>
            )
          })}
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
