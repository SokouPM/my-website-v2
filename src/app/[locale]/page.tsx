"use client"

import Link from "next/link"
import { ReactElement } from "react"

import { CardBody, CardContainer, CardItem } from "@/components/animations/3d-card"
import RetroGrid from "@/components/animations/retro-grid"
import WordFadeIn from "@/components/animations/word-fade-in"
import { ThemeToggle } from "@/components/header/ThemeToggle"
import Logo from "@/components/Logo"

const RenderPortalLogo = (): ReactElement => {
  return (
    <CardContainer>
      <CardBody className="size-max">
        <Link href={"/about-me"} className="flex size-max flex-col items-center justify-center text-center">
          <CardItem translateZ={100} translateY={-30}>
            <Logo size="big" />
          </CardItem>
          <CardItem translateZ={200} translateY={-25}>
            <WordFadeIn words="Pierre Marquet" className="z-10 select-none text-3xl font-bold sm:text-5xl" />
          </CardItem>
          <CardItem translateZ={200} translateY={-25}>
            <WordFadeIn words="Développeur et Designer" className="z-10 select-none text-3xl sm:my-3 sm:text-5xl" />
          </CardItem>
          <CardItem translateZ={50} translateY={10}>
            <WordFadeIn
              words="Cliquez n'importe où pour entrer"
              className="z-10 select-none text-xl italic sm:text-2xl"
            />
          </CardItem>
        </Link>
      </CardBody>
    </CardContainer>
  )
}

export default function Home(): ReactElement | null {
  return (
    <main className="flex h-screen w-screen items-center justify-center overflow-hidden">
      <div className="z-30">
        <RenderPortalLogo />
      </div>
      <div className="fixed right-3 top-3 z-30">
        <ThemeToggle />
      </div>
      <RetroGrid className="z-20" />
    </main>
  )
}
