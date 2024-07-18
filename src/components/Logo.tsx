"use client"

import Link from "next/link"
import { useTranslations } from "next-intl"
import { useTheme } from "next-themes"
import { ReactElement } from "react"

import { Avatar, AvatarImage } from "@/components/ui/avatar"

import blackLogo from "/public/images/blackLogo.svg"
import whiteLogo from "/public/images/whiteLogo.svg"

export const LogoImg = ({
  size = "small",
}: {
  size?: "big" | "small"
  forcedTheme?: "light" | "dark"
}): ReactElement => {
  const { theme } = useTheme()
  const t = useTranslations("header.logo")

  return (
    <Avatar className={size === "small" ? "size-16 p-1" : "size-80 p-5 sm:size-96"}>
      <AvatarImage
        className="select-none"
        draggable={false}
        src={theme === "light" ? blackLogo.src : whiteLogo.src}
        alt={t("alt")}
      />
    </Avatar>
  )
}

export default function Logo({ size = "small", locale }: { size?: "big" | "small"; locale?: string }): ReactElement {
  if (locale) {
    return (
      <Link href={`/${locale}`} className="rounded-full transition-all">
        <LogoImg size={size} />
      </Link>
    )
  }

  return <LogoImg size={size} />
}
