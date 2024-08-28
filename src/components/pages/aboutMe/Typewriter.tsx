"use client"

import { useTranslations } from "next-intl"
import { ReactElement } from "react"
import Typewriter from "typewriter-effect"

export default function TypeWriter(): ReactElement {
  const t = useTranslations("pages.about-me")

  return (
    <div className="h-12 content-center md:h-16">
      <Typewriter
        component={"h3"}
        options={{
          autoStart: true,
          strings: [
            t("typewriter-strings.web-developper"),
            t("typewriter-strings.designer"),
            t("typewriter-strings.frontend-developper"),
            t("typewriter-strings.backend-developper"),
            t("typewriter-strings.graphic-designer"),
          ],
          cursor: "|",
          cursorClassName: "text-3xl md:text-4xl typewriter-cursor",
          wrapperClassName: "gradient bg-clip-text text-3xl font-semibold text-transparent md:text-4xl",
          loop: true,
        }}
      />
    </div>
  )
}
