"use client"

import { useLocale, useTranslations } from "next-intl"
import Link from "next/link"
import { ReactElement } from "react"
import { FaFilePdf, FaGithub, FaLinkedin } from "react-icons/fa"
import { IoMdMail } from "react-icons/io"

import { Button } from "@/components/ui/button"

import cv from "/public/files/cv_fr.pdf"

export default function SocialsLinks(): ReactElement {
  const t = useTranslations("pages.about-me.links")
  const locale: string = useLocale()

  return (
    <ul className="flex items-center justify-center gap-4">
      <li>
        <Button className="bg-gray-600 hover:bg-gray-700" asChild>
          <a href="https://github.com/SokouPM" target="_blank" rel="noreferrer">
            <FaGithub className="text-xl md:mr-2" />
            <span className="sr-only md:not-sr-only">{t("github.title")}</span>
          </a>
        </Button>
      </li>
      <li>
        <Button className="bg-blue-600 hover:bg-blue-700" asChild>
          <a href="https://www.linkedin.com/in/pierre-marquet-98987b199/" target="_blank" rel="noreferrer">
            <FaLinkedin className="text-xl md:mr-2" />
            <span className="sr-only md:not-sr-only">{t("linkedin.title")}</span>
          </a>
        </Button>
      </li>
      <li>
        <Button className="bg-red-600 hover:bg-red-700" asChild disabled>
          <Link href={cv} target="_blank" rel="noopener noreferrer" aria-label={t("cv.title")} title={t("cv.title")}>
            <FaFilePdf className="text-xl md:mr-2" />
            <span className="sr-only md:not-sr-only">{t("cv.title")} (PDF)</span>
          </Link>
        </Button>
      </li>
      <li>
        <Button asChild>
          <Link href={`/${locale}/contact`}>
            <IoMdMail className="text-xl md:mr-2" />
            <span className="sr-only md:not-sr-only">{t("contact.title")}</span>
          </Link>
        </Button>
      </li>
    </ul>
  )
}
