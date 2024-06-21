import type { Metadata } from "next"
import "./globals.css"
import { Roboto_Flex } from "next/font/google"
import { NextIntlClientProvider } from "next-intl"
import { getMessages } from "next-intl/server"
import { ReactElement } from "react"

import Footer from "@/components/layout/Footer"
import Header from "@/components/layout/Header"
import { ThemeProvider } from "@/components/provider/theme-provider"
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

export default async function RootLayout({
  children,
  params: { locale },
}: {
  children: ReactElement
  params: { locale: string }
}): Promise<ReactElement> {
  const messages = await getMessages()

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className={`${RobotoFlex.className} flex min-h-screen flex-col`}>
        <ThemeProvider attribute="class" defaultTheme="dark" disableTransitionOnChange>
          <NextIntlClientProvider messages={messages}>
            <Header />
            {children}
            <TailwindSizeIndicator />
            <TailwindColorIndicator />
            <Footer />
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
