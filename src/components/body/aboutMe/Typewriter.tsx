"use client"

import { useTranslations } from "next-intl"
import { ReactElement } from "react"
import Typewriter from "typewriter-effect"

export default function TypeWriter(): ReactElement {
  const t = useTranslations("pages.about-me")
  const typewriterStrings: string[] = [
    t("typewriter-strings.web-developper"),
    t("typewriter-strings.designer"),
    t("typewriter-strings.frontend-developper"),
    t("typewriter-strings.backend-developper"),
    t("typewriter-strings.graphic-designer"),
  ]

  return (
    <h3 className="content-center text-center md:text-left">
      <Typewriter
        component={"span"}
        options={{
          autoStart: true,
          strings: typewriterStrings,
          cursor: "|",
          cursorClassName: "text-3xl md:text-4xl typewriter-cursor",
          wrapperClassName: "gradient bg-clip-text text-3xl font-semibold text-transparent md:text-4xl",
          loop: true,
        }}
      />
      <span className="sr-only">{typewriterStrings.join(", ")}</span>
    </h3>
  )
}
