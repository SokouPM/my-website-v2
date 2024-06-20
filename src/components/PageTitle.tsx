"use client"

import { usePathname } from "next/navigation"
import { ReactElement } from "react"

import { menu } from "@/config/menu"

export default function PageTitle(): ReactElement {
  const pathname = usePathname()

  const getPageTitle = (): string | null => {
    const menuItem = menu.find((item) => item.href === pathname)

    if (menuItem) {
      return menuItem.name
    }

    const subMenuItem = menu.flatMap((item) => item.children || []).find((item) => item.href === pathname)

    if (subMenuItem) {
      return subMenuItem.name
    }

    return null
  }

  const pageTitle = getPageTitle()

  return (
    <>
      <h1 className="mb-10 text-center text-3xl font-bold">{pageTitle}</h1>
    </>
  )
}
