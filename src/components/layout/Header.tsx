"use client"

import { usePathname } from "next/navigation"
import { ReactElement } from "react"

import Logo from "@/components/Logo"
import LangSelect from "@/components/header/LangSelect"
import MobileNav from "@/components/header/MobileNav"
import Navigation from "@/components/header/Navigation"
import { ThemeToggle } from "@/components/header/ThemeToggle"

export default function Header({ locale }: { locale: string }): ReactElement | null {
  const pathname: string = usePathname()
  const pagesVisibility = ["/about-me", "/web-projects", "/design-projects", "/career", "/contact"]

  if (!pagesVisibility.includes(pathname.replace(`/${locale}`, ""))) return null

  return (
    <header className="sticky top-0 z-40 mb-10 flex items-center justify-between gap-4 border-b bg-background p-3 opacity-90 md:items-start">
      {/* Mobile */}
      <div className="block md:hidden">
        <MobileNav locale={locale} />
      </div>
      <div className="block w-max md:hidden">
        <LangSelect />
      </div>

      {/* Desktop */}
      <div className="absolute top-2 left-0 hidden rounded-br-[40%] border-b bg-background p-3 md:block">
        <Logo locale={locale} />
      </div>
      <div className="ml-auto hidden md:block">
        <Navigation locale={locale} />
      </div>
      <div className="hidden w-max md:block">
        <LangSelect />
      </div>

      {/* All displays */}
      <div className="flex items-center justify-center gap-4">
        <ThemeToggle />
      </div>
    </header>
  )
}
