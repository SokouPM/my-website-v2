import { useLocale, useTranslations } from "next-intl"
import Link from "next/link"
import { ReactElement } from "react"

import Logo from "@/components/Logo"
import { CardBody, CardContainer, CardItem } from "@/components/animations/3d-card"
import RetroGrid from "@/components/animations/retro-grid"
import WordFadeIn from "@/components/animations/word-fade-in"
import LangSelect from "@/components/header/LangSelect"
import { ThemeToggle } from "@/components/header/ThemeToggle"

export default function Home(): ReactElement {
  const t = useTranslations("pages.home")

  const locale: string = useLocale()

  return (
    <main className="flex h-screen w-screen items-center justify-center overflow-hidden">
      <div className="fixed top-3 right-3 z-40 flex gap-4">
        <LangSelect />
        <span>
          <ThemeToggle />
        </span>
      </div>
      <div className="z-30">
        <CardContainer>
          <CardBody className="size-max">
            <Link
              href={`/${locale}/about-me`}
              className="flex size-max flex-col items-center justify-center p-28 text-center"
            >
              <CardItem translateZ={100} translateY={-30}>
                <Logo size="big" />
              </CardItem>
              <CardItem translateZ={200} translateY={-25}>
                <WordFadeIn words="Pierre Marquet" className="z-10 select-none font-bold text-3xl sm:text-5xl" />
              </CardItem>
              <CardItem translateZ={200} translateY={-25}>
                <WordFadeIn words={t("title")} className="z-10 select-none text-3xl sm:my-3 sm:text-5xl" />
              </CardItem>
              <CardItem translateZ={50} translateY={10}>
                <WordFadeIn words={t("subtitle")} className="z-10 select-none text-xl italic sm:text-2xl" />
              </CardItem>
            </Link>
          </CardBody>
        </CardContainer>
      </div>

      <RetroGrid className="z-20" />
    </main>
  )
}
