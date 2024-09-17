"use client"

import { useLocale, useTranslations } from "next-intl"
import { usePathname } from "next/navigation"
import { ReactElement } from "react"

import { menu } from "@/interfaces/menu"

export default function PageTitle(): ReactElement {
  const pathname = usePathname()
  const locale = useLocale()
  const t = useTranslations("header.navbar")

  const getPageTitle = (): string | null => {
    const menuItem = menu.find((item): boolean => `/${locale}${item.href}` === pathname)

    if (menuItem) {
      return menuItem.name
    }

    const subMenuItem = menu
      .flatMap((item) => item.children || [])
      .find((item): boolean => `/${locale}${item.href}` === pathname)

    if (subMenuItem) {
      return subMenuItem.name
    }

    return null
  }

  const pageTitle = getPageTitle()

  return <h1 className="mb-10 text-center font-bold text-3xl md:mb-7 md:text-4xl">{t(pageTitle)}</h1>
}
