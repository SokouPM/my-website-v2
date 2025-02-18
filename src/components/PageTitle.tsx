"use client"

import { useLocale, useTranslations } from "next-intl"
import { usePathname } from "next/navigation"
import { ReactElement } from "react"

import NavMenu from "@/data/NavMenu"
import NavMenuItemInterface from "@/interfaces/navMenu"

export default function PageTitle(): ReactElement {
  const pathname: string = usePathname()
  const locale: string = useLocale()
  const t = useTranslations("header.navbar")

  const getPageTitle: () => string | null = (): string | null => {
    const menuItem: NavMenuItemInterface | undefined = NavMenu.find(
      (item: NavMenuItemInterface): boolean => `/${locale}${item.href}` === pathname,
    )

    if (menuItem) {
      return menuItem.name
    }

    const subMenuItem: NavMenuItemInterface | undefined = NavMenu.flatMap(
      (item: NavMenuItemInterface): NavMenuItemInterface[] => item.children || [],
    ).find((item: NavMenuItemInterface): boolean => `/${locale}${item.href}` === pathname)

    if (subMenuItem) {
      return subMenuItem.name
    }

    return null
  }

  const pageTitle: string | null = getPageTitle()

  return <h1 className="mb-10 text-center font-bold text-3xl md:mb-7 md:text-4xl">{t(pageTitle)}</h1>
}
