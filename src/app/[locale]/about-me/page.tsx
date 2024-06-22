"use client"

import Link from "next/link"
import { useTranslations } from "next-intl"
import { ReactElement } from "react"
import { FaFilePdf, FaGithub, FaLinkedin } from "react-icons/fa"
import { IoMdMail } from "react-icons/io"
import Typewriter from "typewriter-effect"

import ShineBorder from "@/components/animations/shine-border"
import PageTitle from "@/components/PageTitle"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

import profile from "/public/images/profile.png"
import cv from "/public/files/cv_fr.pdf"

import { Button } from "@/components/ui/button"

const Links = () => {
  const t = useTranslations("pages.about-me.links")

  return (
    <ul className="flex items-center justify-center gap-4">
      <li>
        <Button className="bg-gray-600 hover:bg-gray-700" asChild>
          <a href="https://github.com/SokouPM" target="_blank" rel="noreferrer">
            <FaGithub className="text-xl md:mr-2" />
            <span className="hidden md:block">{t("github.title")}</span>
          </a>
        </Button>
      </li>
      <li>
        <Button className="bg-blue-600 hover:bg-blue-700" asChild>
          <a href="https://www.linkedin.com/in/pierre-marquet-98987b199/" target="_blank" rel="noreferrer">
            <FaLinkedin className="text-xl md:mr-2" />
            <span className="hidden md:block">{t("linkedin.title")}</span>
          </a>
        </Button>
      </li>
      <li>
        <Button className="bg-red-600 hover:bg-red-700" asChild disabled>
          <Link href={cv} locale={false} target="_blank" rel="noopener noreferrer">
            <FaFilePdf className="text-xl md:mr-2" />
            <span className="hidden md:block">{t("cv.title")}</span>
          </Link>
        </Button>
      </li>
      <li>
        <Button asChild>
          <Link href={"/contact"}>
            <IoMdMail className="text-xl md:mr-2" />
            <span className="hidden md:block">{t("contact.title")}</span>
          </Link>
        </Button>
      </li>
    </ul>
  )
}

export default function AboutMe(): ReactElement {
  const t = useTranslations("pages.about-me")

  return (
    <main className="main-container flex-1 flex-col">
      <PageTitle />
      <section className="flex flex-col items-center gap-10">
        <div className="flex flex-col-reverse items-center justify-between gap-5 md:flex-row md:gap-10">
          <div>
            <h2 className="text-center text-4xl font-bold md:text-left md:text-5xl">Pierre Marquet</h2>
            <div className="h-12 content-center md:h-16">
              <Typewriter
                component={"h3"}
                options={{
                  autoStart: true,
                  strings: [
                    t("typewriter-strings.web-developper"),
                    t("typewriter-strings.frontend-developper"),
                    t("typewriter-strings.backend-developper"),
                    t("typewriter-strings.designer"),
                  ],
                  cursor: "|",
                  cursorClassName: "text-3xl md:text-4xl typewriter-cursor",
                  wrapperClassName: "gradient bg-clip-text text-3xl font-semibold text-transparent md:text-4xl",
                  loop: true,
                }}
              />
            </div>
            <p>{t("bio")}</p>
          </div>
          <ShineBorder borderRadius={1000} borderWidth={10} color={["#8D27FF", "#B40A74"]} className="p-1">
            <Avatar className="size-max bg-gray-200 dark:bg-gray-800">
              <AvatarImage src={profile.src} alt={t("avatar-alt")} className="size-52" draggable={false} />
              <AvatarFallback className="size-52 bg-background text-5xl">䷴</AvatarFallback>
            </Avatar>
          </ShineBorder>
        </div>
        <Links />
      </section>
    </main>
  )
}
