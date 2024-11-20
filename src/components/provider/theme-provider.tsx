"use client"

import { ThemeProvider as NextThemesProvider, ThemeProviderProps } from "next-themes"
import { ReactElement } from "react"

export function ThemeProvider({ children, ...props }: ThemeProviderProps): ReactElement {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}
