"use client"

import { usePathname } from "next/navigation"
import { ReactElement, useEffect, useState } from "react"

import LangSelect from "@/components/LangSelect"
import MobileNav from "@/components/layout/MobileNav"
import Navigation from "@/components/layout/Navigation"
import Logo from "@/components/Logo"
import { ThemeToggle } from "@/components/ThemeToggle"

export default function Header(): ReactElement | null {
  const [windowWithSize, setWindowWithSize] = useState<number>(0)
  const pathname = usePathname()
  const triggerSize = 750

  const resizeWindow = (): void => {
    if (typeof window !== "undefined") {
      setWindowWithSize(window.innerWidth)
    }
  }

  useEffect((): void => {
    resizeWindow()
    window.addEventListener("resize", resizeWindow)
  }, [])

  if (pathname === "/") return null

  return (
    <header className="mb-10 flex items-start justify-between p-3">
      {windowWithSize && windowWithSize < triggerSize ? (
        <div className="flex-1 md:w-max">
          <MobileNav />
        </div>
      ) : (
        <Logo withHomeLink />
      )}
      {windowWithSize && windowWithSize < triggerSize && windowWithSize >= 300 ? <Logo withHomeLink /> : null}
      <div className="flex flex-1 items-center justify-end gap-3 md:w-max md:flex-initial md:justify-between">
        {windowWithSize && windowWithSize >= triggerSize ? <Navigation /> : null}
        <div className="flex items-center justify-center gap-4">
          <LangSelect />
          <span>
            <ThemeToggle />
          </span>
        </div>
      </div>
    </header>
  )
}
