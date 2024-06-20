"use client"

import Link from "next/link"
import { useTheme } from "next-themes"
import { ReactElement } from "react"

import { Avatar, AvatarImage } from "@/components/ui/avatar"

export const LogoImg = ({
  size = "small",
}: {
  size?: "big" | "small"
  forcedTheme?: "light" | "dark"
}): ReactElement => {
  const { theme } = useTheme()

  return (
    <Avatar className={size === "small" ? "size-16 p-1" : "size-80 p-5 sm:size-96"}>
      <AvatarImage
        className="select-none"
        draggable={false}
        src={theme === "light" ? "/blackLogo.svg" : "/whiteLogo.svg"}
        alt="Logo Pierre Marquet Développeur web et Designer"
      />
    </Avatar>
  )
}

export default function Logo({
  size = "small",
  withHomeLink = false,
}: {
  size?: "big" | "small"
  withHomeLink?: boolean
  forcedTheme?: "light" | "dark"
}) {
  if (withHomeLink) {
    return (
      <Link href="/" className="rounded-full transition-all">
        <LogoImg size={size} />
      </Link>
    )
  }

  return <LogoImg size={size} />
}
