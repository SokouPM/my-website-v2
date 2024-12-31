"use client"

import { useLocale, useTranslations } from "next-intl"
import { usePathname } from "next/navigation"
import { ReactElement } from "react"

import { MenuItemInterface, menu } from "@/interfaces/menu"

export default function PageTitle(): ReactElement {
  const pathname: string = usePathname()
  const locale: string = useLocale()
  const t = useTranslations("header.navbar")

  const getPageTitle: () => string | null = (): string | null => {
    const menuItem: MenuItemInterface | undefined = menu.find(
      (item: MenuItemInterface): boolean => `/${locale}${item.href}` === pathname,
    )

    if (menuItem) {
      return menuItem.name
    }

    const subMenuItem: MenuItemInterface | undefined = menu
      .flatMap((item: MenuItemInterface): MenuItemInterface[] => item.children || [])
      .find((item: MenuItemInterface): boolean => `/${locale}${item.href}` === pathname)

    if (subMenuItem) {
      return subMenuItem.name
    }

    return null
  }

  const pageTitle: string | null = getPageTitle()

  return <h1 className="mb-10 text-center font-bold text-3xl md:mb-7 md:text-4xl">{t(pageTitle)}</h1>
}
