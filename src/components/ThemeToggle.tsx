"use client"

import { useTheme } from "next-themes"
import * as React from "react"
import { ReactElement } from "react"
import { LuMoon, LuSun } from "react-icons/lu"

import { Button } from "@/components/ui/button"

export function ThemeToggle(): ReactElement {
  const { setTheme, theme } = useTheme()

  return (
    <Button variant="outline" size="icon" onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
      <LuSun className="size-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <LuMoon className="absolute size-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Changer le theme</span>
    </Button>
  )
}
