"use client"

import { usePathname } from "next/navigation"
import { ReactElement, useEffect, useState } from "react"

import MobileNav from "@/components/layout/MobileNav"
import Navigation from "@/components/layout/Navigation"
import Logo from "@/components/Logo"
import { ThemeToggle } from "@/components/ThemeToggle"

export default function Header(): ReactElement | null {
  const [windowWithSize, setWindowWithSize] = useState<number>(0)
  const pathname = usePathname()

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
      {windowWithSize && windowWithSize < 640 ? <MobileNav /> : <Logo withHomeLink={true} />}
      {windowWithSize && windowWithSize < 640 ? <Logo /> : null}
      <div className="flex items-center justify-end gap-3 md:justify-between">
        {windowWithSize && windowWithSize >= 640 ? <Navigation /> : null}
        <ThemeToggle />
      </div>
    </header>
  )
}
