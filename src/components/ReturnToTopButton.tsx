"use client"

import { useTranslations } from "next-intl"
import { ReactElement, useEffect, useState } from "react"
import { FaArrowUp } from "react-icons/fa6"

import { Button } from "@/components/ui/button"

export default function ReturnToTopButton(): ReactElement | null {
  const [scrollFromTop, setScrollFromTop] = useState<number>(0)
  const t = useTranslations("components")

  useEffect((): void => {
    window.addEventListener("scroll", (): void => {
      setScrollFromTop(window.scrollY)
    })
  }, [])

  if (scrollFromTop < 100) return null

  return (
    <Button
      size={"icon"}
      variant={"outline"}
      onClick={(): void => {
        window.scrollTo({ top: 0, behavior: "smooth" })
      }}
      className="fixed right-4 bottom-4 z-30 animate-bounce rounded-full md:size-14"
    >
      <FaArrowUp className="text-lg md:text-2xl" />
      <span className="sr-only">{t("return-to-top-button")}</span>
    </Button>
  )
}
