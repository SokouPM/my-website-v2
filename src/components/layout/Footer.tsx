"use client"

import { useLocale } from "next-intl"
import { usePathname } from "next/navigation"
import { ReactElement } from "react"

export default function Footer(): ReactElement | null {
  const pathname: string = usePathname()
  const locale: string = useLocale()

  const pagesVisibility = ["/about-me", "/web-projects", "/design-projects", "/career", "/contact"]

  if (!pagesVisibility.includes(pathname.replace(`/${locale}`, ""))) return null

  const year: number = new Date().getFullYear()

  return (
    <footer className="mt-20 flex h-16 w-full items-center justify-center border-t bg-background">
      <p className="text-center text-sm">&copy; {year} - Pierre Marquet</p>
    </footer>
  )
}
