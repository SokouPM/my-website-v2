import type { Metadata } from "next"
import "./globals.css"
import { Roboto_Flex } from "next/font/google"
import { ReactElement, ReactNode } from "react"

import Footer from "@/components/layout/Footer"
import Header from "@/components/layout/Header"
import { ThemeProvider } from "@/components/theme-provider"
import { TailwindColorIndicator } from "@/components/utils/TailwindColorIndicator"
import { TailwindSizeIndicator } from "@/components/utils/TailwindSizeIndicator"

const RobotoFlex = Roboto_Flex({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    template: "% | Développeur web / Designer - Pierre Marquet",
    default: "Développeur web / Designer - Pierre Marquet",
  },
  description: "Portfolio - Pierre Marquet, développeur web et infographiste.",
}

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>): ReactElement {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body className={`${RobotoFlex.className} flex min-h-screen flex-col`}>
        <ThemeProvider attribute="class" defaultTheme="dark" disableTransitionOnChange>
          <Header />
          {children}
          <TailwindSizeIndicator />
          <TailwindColorIndicator />
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
