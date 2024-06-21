"use client"

import { usePathname } from "next/navigation"
import { useLocale } from "next-intl"
import { ReactElement, useEffect, useState } from "react"

import LangSelect from "@/components/header/LangSelect"
import MobileNav from "@/components/header/MobileNav"
import Navigation from "@/components/header/Navigation"
import { ThemeToggle } from "@/components/header/ThemeToggle"
import Logo from "@/components/Logo"

export default function Header(): ReactElement | null {
  const [windowWithSize, setWindowWithSize] = useState<number>(0)
  const pathname = usePathname()
  const locale = useLocale()
  const maxTriggerSize = 750

  const resizeWindow = (): void => {
    if (typeof window !== "undefined") {
      setWindowWithSize(window.innerWidth)
    }
  }

  useEffect((): void => {
    resizeWindow()
    window.addEventListener("resize", resizeWindow)
  }, [])

  if (pathname === `/${locale}`) return null

  return (
    <header className="mb-10 flex items-center justify-between gap-4 p-3 md:items-start">
      {windowWithSize && windowWithSize < maxTriggerSize ? (
        <div>
          <MobileNav />
        </div>
      ) : (
        <Logo withHomeLink />
      )}
      {windowWithSize && windowWithSize >= maxTriggerSize ? (
        <div className="ml-auto">
          <Navigation />
        </div>
      ) : (
        <div className="mx-auto w-max">
          <LangSelect />
        </div>
      )}
      <div className="flex items-center justify-center gap-4">
        <ThemeToggle />
      </div>
    </header>
  )
}
