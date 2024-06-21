"use client"

import { usePathname } from "next/navigation"
import { useLocale } from "next-intl"
import { ReactElement } from "react"

export default function Footer(): ReactElement | null {
  const pathname = usePathname()
  const locale = useLocale()

  if (pathname === `/${locale}`) return null

  return (
    <footer className="flex h-16 w-full items-center justify-center">
      <p className="text-center text-sm">&copy; 2024 - Pierre Marquet</p>
    </footer>
  )
}
