import { SpeedInsights } from "@vercel/speed-insights/next"
import type { Metadata } from "next"
import "./globals.css"
import { Roboto_Flex } from "next/font/google"
import { NextIntlClientProvider } from "next-intl"
import { getMessages } from "next-intl/server"
import { ReactElement } from "react"

import Footer from "@/components/layout/Footer"
import Header from "@/components/layout/Header"
import { ThemeProvider } from "@/components/provider/theme-provider"
import ReturnToTopButton from "@/components/ReturnToTopButton"
import { TailwindColorIndicator } from "@/components/utils/TailwindColorIndicator"
import { TailwindSizeIndicator } from "@/components/utils/TailwindSizeIndicator"

const RobotoFlex = Roboto_Flex({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    template: "% | Développeur web / Designer - Pierre Marquet",
    default: "Développeur web / Designer - Pierre Marquet",
  },
  description: "Portfolio - Pierre Marquet, développeur web et infographiste.",
  icons: [{ url: "/favicon.ico" }],
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
        <NextIntlClientProvider messages={messages}>
          <ThemeProvider attribute="class" defaultTheme="dark" disableTransitionOnChange>
            <Header />
            {children}
            <ReturnToTopButton />
            <SpeedInsights />
            <TailwindSizeIndicator />
            <TailwindColorIndicator />
            <Footer />
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
