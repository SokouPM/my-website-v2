"use client"

import Link from "next/link"
import { useTranslations } from "next-intl"
import { ReactElement } from "react"
import { FaFilePdf, FaGithub, FaLinkedin } from "react-icons/fa"
import { IoMdMail } from "react-icons/io"
import Typewriter from "typewriter-effect"

import ShineBorder from "@/components/animations/shine-border"
import { DockerIcon } from "@/components/icons/DockerIcon"
import { JavascriptIcon } from "@/components/icons/JavascriptIcon"
import { MysqlIcon } from "@/components/icons/MysqlIcon"
import { NextIcon } from "@/components/icons/NextIcon"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { NodeIcon } from "@/components/icons/NodeIcon"
import { PhpIcon } from "@/components/icons/PhpIcon"
import { PostgresIcon } from "@/components/icons/PostgresIcon"
import { ReactIcon } from "@/components/icons/ReactIcon"
import { SymfonyIcon } from "@/components/icons/SymfonyIcon"
import { TailwindIcon } from "@/components/icons/TaiwindIcon"
import { TypescriptIcon } from "@/components/icons/TypescriptIcon"
import { VueIcon } from "@/components/icons/VueIcon"
import PageTitle from "@/components/PageTitle"

import cv from "/public/files/cv_fr.pdf"
import profile from "/public/images/profile.png"

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
      <section className="pb-28">
        <div className="mb-10 flex flex-col-reverse items-center justify-between gap-5 md:flex-row md:gap-10">
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
              <AvatarFallback className="size-52 bg-gray-200 text-5xl dark:bg-gray-800">䷴</AvatarFallback>
            </Avatar>
          </ShineBorder>
        </div>
        <Links />
      </section>
      <section>
        <h2 className="mb-10 text-center text-3xl font-bold">{t("skills.title")}</h2>
        <ul className="mb-10 grid grid-cols-2 gap-y-10 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          <li className="flex flex-col items-center gap-2">
            <ReactIcon size={80} />
            <strong className="text-xl font-normal">React</strong>
          </li>
          <li className="flex flex-col items-center gap-2">
            <NextIcon size={80} className="rounded-full dark:border" />
            <strong className="text-xl font-normal">Next.js</strong>
          </li>
          <li className="flex flex-col items-center gap-2">
            <VueIcon size={80} />
            <strong className="text-xl font-normal">Vue.js</strong>
          </li>
          <li className="flex flex-col items-center gap-2">
            <SymfonyIcon size={80} className="rounded-full dark:border" />
            <strong className="text-xl font-normal">Symfony</strong>
          </li>
          <li className="flex flex-col items-center gap-2">
            <JavascriptIcon size={80} className="rounded" />
            <strong className="text-xl font-normal">Javascript</strong>
          </li>
          <li className="flex flex-col items-center gap-2">
            <TypescriptIcon size={80} className="rounded" />
            <strong className="text-xl font-normal">Typescript</strong>
          </li>
          <li className="flex flex-col items-center gap-2">
            <NodeIcon size={80} />
            <strong className="text-xl font-normal">Node.js</strong>
          </li>
          <li className="flex flex-col items-center gap-2">
            <PhpIcon size={120} className="h-20 rounded-[100%] bg-[#6181B6]" />
            <strong className="text-xl font-normal">PHP</strong>
          </li>
          <li className="flex flex-col items-center gap-2">
            <TailwindIcon size={80} />
            <strong className="text-xl font-normal">Tailwind CSS</strong>
          </li>
          <li className="flex flex-col items-center gap-2">
            <PostgresIcon size={80} />
            <strong className="text-xl font-normal">PostgresSQL</strong>
          </li>
          <li className="flex flex-col items-center gap-2">
            <MysqlIcon size={80} />
            <strong className="text-xl font-normal">MySQL</strong>
          </li>
          <li className="flex flex-col items-center gap-2">
            <DockerIcon size={80} />
            <strong className="text-xl font-normal">Docker</strong>
          </li>
        </ul>
      </section>
    </main>
  )
}
