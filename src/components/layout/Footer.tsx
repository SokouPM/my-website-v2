"use client"

import { useLocale } from "next-intl"
import { usePathname } from "next/navigation"
import { ReactElement } from "react"

export default function Footer(): ReactElement | null {
  const pathname = usePathname()
  const locale = useLocale()

  if (pathname === `/${locale}`) return null

  return (
    <footer className="mt-20 flex h-16 w-full items-center justify-center border-t bg-background">
      <p className="text-center text-sm">&copy; 2024 - Pierre Marquet</p>
    </footer>
  )
}
