import GlitchText from "@/components/animations/glitch-text"
import LangSelect from "@/components/header/LangSelect"
import { ThemeToggle } from "@/components/header/ThemeToggle"
import { Button } from "@/components/ui/button"
import { useTranslations } from "next-intl"
import Link from "next/link"
import { ReactElement } from "react"
import { RiArrowGoBackFill } from "react-icons/ri"

export default function NotFound(): ReactElement {
  const t = useTranslations("pages.404")

  return (
    <main className="flex flex-1 flex-col items-center justify-center text-nowrap font-bold">
      <div className="fixed top-3 right-3 z-40 flex gap-4">
        <LangSelect />
        <span>
          <ThemeToggle />
        </span>
      </div>
      <GlitchText speed={2} enableShadows>
        404
      </GlitchText>
      <GlitchText speed={6} enableShadows className="-mt-10">
        {t("title")}
      </GlitchText>
      <Button variant="ghost" asChild>
        <Link href={"/about-me"} className="text-2xl">
          <RiArrowGoBackFill className="mr-2" />
          {t("button")}
        </Link>
      </Button>
    </main>
  )
}
