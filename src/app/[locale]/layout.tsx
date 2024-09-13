import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"
import type { Metadata } from "next"
import "./globals.css"
import { Roboto_Flex } from "next/font/google"
import { NextIntlClientProvider } from "next-intl"
import { getMessages, getTranslations, unstable_setRequestLocale } from "next-intl/server"
import { ReactElement, ReactNode } from "react"

import Footer from "@/components/layout/Footer"
import Header from "@/components/layout/Header"
import { ThemeProvider } from "@/components/provider/theme-provider"
import ReturnToTopButton from "@/components/ReturnToTopButton"
import { TailwindColorIndicator } from "@/components/utils/TailwindColorIndicator"
import { TailwindSizeIndicator } from "@/components/utils/TailwindSizeIndicator"

const RobotoFlex = Roboto_Flex({ subsets: ["latin"] })

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: ["metadata"] })

  return {
    title: {
      template: `%s | ${t("title.template")}`,
      default: t("title.default"),
    },
    description: t("description"),
    icons: [{ url: "/favicon.ico" }],
  }
}

export default async function RootLayout({
  children,
  params: { locale },
}: {
  children: ReactNode
  params: { locale: string }
}): Promise<ReactElement> {
  unstable_setRequestLocale(locale)
  const messages = await getMessages()

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className={`${RobotoFlex.className} flex min-h-dvh flex-col`}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <ThemeProvider attribute="class" defaultTheme="dark" disableTransitionOnChange>
            <Header locale={locale} />
            {children}
            <ReturnToTopButton />
            <>
              <TailwindSizeIndicator />
              <TailwindColorIndicator />
            </>
            <Footer />
          </ThemeProvider>
        </NextIntlClientProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
