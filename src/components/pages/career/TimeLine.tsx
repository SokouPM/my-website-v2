"use client"

import Image from "next/image"
import { useTranslations } from "next-intl"
import { ReactElement, ReactNode } from "react"
import {
  BiLogoBootstrap,
  BiLogoCss3,
  BiLogoDjango,
  BiLogoDocker,
  BiLogoHtml5,
  BiLogoJava,
  BiLogoMongodb,
  BiLogoPhp,
  BiLogoPostgresql,
  BiLogoPython,
  BiLogoReact,
  BiLogoSpringBoot,
  BiLogoTailwindCss,
  BiLogoTypescript,
  BiLogoVuejs,
} from "react-icons/bi"
import { DiMysql, DiNodejsSmall, DiSymfonyBadge } from "react-icons/di"
import { GiCrackedGlass } from "react-icons/gi"
import { RiJavascriptFill, RiNextjsFill } from "react-icons/ri"
import { SiAdobedreamweaver, SiAdobeillustrator, SiAdobeindesign, SiAdobephotoshop, SiCoreldraw } from "react-icons/si"
import { TbBrandKotlin } from "react-icons/tb"
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component"

import "react-vertical-timeline-component/style.min.css"

import anfsi from "/public/images/career/anfsi.jpeg"
import sdv from "/public/images/career/sdv.jpeg"
import deletec from "/public/images/career/deletec.png"
import tr from "/public/images/career/tr.png"
import afpa from "/public/images/career/afpa.png"
import cpmgn from "/public/images/career/cpmgn.png"
import eg from "/public/images/career/eg.png"
import scgd from "/public/images/career/scgd.jpg"
import jfc from "/public/images/career/jfc.png"
import creapub from "/public/images/career/creapub.jpg"
import comg from "/public/images/career/comg.png"
import studiom from "/public/images/career/studiom.png"
import typoffset from "/public/images/career/typoffset.png"
import lfm from "/public/images/career/lfm.png"
import lrp from "/public/images/career/lrp.jpg"
import vs from "/public/images/career/vs.jpg"

import { careerInterface } from "@/interfaces/career"

const RenderTimelineContent = ({
  title,
  localisation,
  description,
  stackIcons,
}: {
  title: string
  localisation: string
  description?: ReactNode
  stackIcons?: ReactElement[]
}): ReactElement => (
  <div className="flex flex-col space-y-3">
    <strong className="text-lg font-bold md:text-2xl">{title}</strong>
    <span className="italic md:text-lg">{localisation}</span>
    {description && <span className="text-sm md:text-base">{description}</span>}
    {stackIcons && (
      <ul className="mt-5 flex flex-wrap items-center justify-center gap-2">
        {stackIcons.map((icon, index) => (
          <li key={index}>{icon}</li>
        ))}
      </ul>
    )}
  </div>
)

export default function TimeLine(): ReactElement {
  const t = useTranslations("pages.career")

  const size: number = 35
  const sizeReducer: number = 8

  const career: careerInterface[] = [
    {
      date: t("work.anfsi.date"),
      logo: <Image src={anfsi.src} alt={t("work.anfsi.logo-alt")} width={200} height={200} className="rounded-full" />,
      title: t("work.anfsi.title"),
      localisation: t("work.anfsi.localisation"),
      description: t.rich("work.anfsi.description", {
        ul: (chunks) => <ul className="list-inside list-disc">{chunks}</ul>,
        ol: (chunks) => <ol className="list-inside list-decimal pl-10">{chunks}</ol>,
        li: (chunks) => <li>{chunks}</li>,
        strong: (chunks) => <strong>{chunks}</strong>,
      }),
      type: "work",
      stackIcons: [
        <RiJavascriptFill size={size} key="js" />,
        <BiLogoVuejs size={size} key="vue" />,
        <BiLogoPhp size={size} key="php" />,
        <DiSymfonyBadge size={size} key="symfony" />,
        <BiLogoDocker size={size} key="docker" />,
        <DiMysql size={size} key="mysql" />,
      ],
    },
    {
      date: t("education.sdv.master.date"),
      logo: <Image src={sdv.src} alt={t("education.sdv.logo-alt")} width={200} height={200} className="rounded-full" />,
      title: t("education.sdv.master.title"),
      localisation: t("education.sdv.localisation"),
      type: "education",
      stackIcons: [
        <BiLogoTypescript size={size} key="ts" />,
        <BiLogoReact size={size} key="react" />,
        <RiNextjsFill size={size} key="next" />,
        <BiLogoJava size={size} key="java" />,
        <BiLogoSpringBoot size={size} key="spring" />,
        <BiLogoPython size={size} key="python" />,
        <BiLogoDjango size={size} key="django" />,
        <BiLogoDocker size={size} key="docker" />,
        <BiLogoTailwindCss size={size} key="tailwind" />,
        <BiLogoPostgresql size={size} key="postgresql" />,
        <BiLogoMongodb size={size} key="mongodb" />,
      ],
    },
    {
      date: t("work.deletec.date"),
      logo: (
        <Image src={deletec.src} alt={t("work.deletec.logo-alt")} width={200} height={200} className="rounded-full" />
      ),
      title: t("work.deletec.title"),
      localisation: t("work.deletec.localisation"),
      description: t.rich("work.deletec.description", {
        ul: (chunks) => <ul className="list-inside list-disc">{chunks}</ul>,
        ol: (chunks) => <ol className="list-inside list-decimal pl-10">{chunks}</ol>,
        li: (chunks) => <li>{chunks}</li>,
        strong: (chunks) => <strong>{chunks}</strong>,
      }),
      type: "work",
      stackIcons: [
        <RiJavascriptFill size={size} key="js" />,
        <BiLogoReact size={size} key="react" />,
        <RiNextjsFill size={size} key="next" />,
        <DiNodejsSmall size={size} key="node" />,
        <BiLogoBootstrap size={size} key="bootstrap" />,
        <DiMysql size={size} key="mysql" />,
      ],
    },
    {
      date: t("education.sdv.bachelor.date"),
      logo: <Image src={sdv.src} alt={t("education.sdv.logo-alt")} width={200} height={200} className="rounded-full" />,
      title: t("education.sdv.bachelor.title"),
      localisation: t("education.sdv.localisation"),
      type: "education",
      stackIcons: [
        <RiJavascriptFill size={size} key="js" />,
        <BiLogoReact size={size} key="react" />,
        <RiNextjsFill size={size} key="next" />,
        <DiNodejsSmall size={size} key="node" />,
        <TbBrandKotlin size={size} key="kotlin" />,
        <BiLogoJava size={size} key="java" />,
        <BiLogoTailwindCss size={size} key="tailwind" />,
        <BiLogoPostgresql size={size} key="postgresql" />,
        <BiLogoMongodb size={size} key="mongodb" />,
      ],
    },
    {
      date: t("work.tr.date"),
      logo: <Image src={tr.src} alt={t("work.tr.logo-alt")} width={200} height={200} className="rounded-full" />,
      title: t("work.tr.title"),
      localisation: t("work.tr.localisation"),
      description: t.rich("work.tr.description", {
        ul: (chunks) => <ul className="list-inside list-disc">{chunks}</ul>,
        li: (chunks) => <li>{chunks}</li>,
        strong: (chunks) => <strong>{chunks}</strong>,
      }),
      type: "work",
      stackIcons: [
        <BiLogoHtml5 size={size} key="html" />,
        <BiLogoCss3 size={size} key="css" />,
        <RiJavascriptFill size={size} key="js" />,
        <BiLogoPhp size={size} key="php" />,
        <BiLogoBootstrap size={size} key="bootstrap" />,
        <DiMysql size={size} key="mysql" />,
      ],
    },
    {
      date: t("education.afpa.date"),
      logo: (
        <Image src={afpa.src} alt={t("education.afpa.logo-alt")} width={200} height={200} className="rounded-full" />
      ),
      title: t("education.afpa.title"),
      localisation: t("education.afpa.localisation"),
      type: "education",
      stackIcons: [
        <BiLogoHtml5 size={size} key="html" />,
        <BiLogoCss3 size={size} key="css" />,
        <RiJavascriptFill size={size} key="js" />,
        <BiLogoPhp size={size} key="php" />,
        <BiLogoJava size={size} key="java" />,
        <BiLogoBootstrap size={size} key="bootstrap" />,
        <DiMysql size={size} key="mysql" />,
      ],
    },
    {
      date: t("work.cpmgn.date"),
      logo: <Image src={cpmgn.src} alt={t("work.cpmgn.logo-alt")} width={200} height={200} className="rounded-full" />,
      title: t("work.cpmgn.title"),
      localisation: t("work.cpmgn.localisation"),
      description: t.rich("work.cpmgn.description", {
        ul: (chunks) => <ul className="list-inside list-disc">{chunks}</ul>,
        li: (chunks) => <li>{chunks}</li>,
        strong: (chunks) => <strong>{chunks}</strong>,
      }),
      type: "work",
      stackIcons: [
        <SiAdobeillustrator size={size - sizeReducer} key="ai" />,
        <SiAdobephotoshop size={size - sizeReducer} key="ps" />,
        <SiAdobeindesign size={size - sizeReducer} key="id" />,
      ],
    },
    {
      date: t("education.eg.date"),
      logo: <Image src={eg.src} alt={t("education.eg.logo-alt")} width={200} height={200} className="rounded-full" />,
      title: t("education.eg.title"),
      localisation: t("education.eg.localisation"),
      type: "education",
    },
    {
      date: t("work.scgd.date"),
      logo: <Image src={scgd.src} alt={t("work.scgd.logo-alt")} width={200} height={200} className="rounded-full" />,
      title: t("work.scgd.title"),
      localisation: t("work.scgd.localisation"),
      description: t.rich("work.scgd.description", {
        ul: (chunks) => <ul className="list-inside list-disc">{chunks}</ul>,
        li: (chunks) => <li>{chunks}</li>,
        strong: (chunks) => <strong>{chunks}</strong>,
      }),
      type: "work",
      stackIcons: [
        <SiAdobeillustrator size={size - sizeReducer} key="ai" />,
        <SiAdobephotoshop size={size - sizeReducer} key="ps" />,
        <SiAdobeindesign size={size - sizeReducer} key="id" />,
      ],
    },
    {
      date: t("education.jfc.date"),
      logo: <Image src={jfc.src} alt={t("education.jfc.logo-alt")} width={200} height={200} className="rounded-full" />,
      title: t("education.jfc.title"),
      localisation: t("education.jfc.localisation"),
      type: "education",
      stackIcons: [
        <SiAdobeillustrator size={size - sizeReducer} key="ai" />,
        <SiAdobephotoshop size={size - sizeReducer} key="ps" />,
        <SiAdobeindesign size={size - sizeReducer} key="id" />,
      ],
    },
    {
      date: t("work.creapub.date"),
      logo: (
        <Image src={creapub.src} alt={t("work.creapub.logo-alt")} width={200} height={200} className="rounded-full" />
      ),
      title: t("work.creapub.title"),
      localisation: t("work.creapub.localisation"),
      type: "work",
      description: t.rich("work.creapub.description", {
        ul: (chunks) => <ul className="list-inside list-disc">{chunks}</ul>,
        li: (chunks) => <li>{chunks}</li>,
        strong: (chunks) => <strong>{chunks}</strong>,
      }),
      stackIcons: [
        <SiAdobeillustrator size={size - sizeReducer} key="ai" />,
        <SiAdobephotoshop size={size - sizeReducer} key="ps" />,
        <SiAdobeindesign size={size - sizeReducer} key="id" />,
      ],
    },
    {
      date: t("work.comg.date"),
      logo: <Image src={comg.src} alt={t("work.comg.logo-alt")} width={200} height={200} className="rounded-full" />,
      title: t("work.comg.title"),
      localisation: t("work.comg.localisation"),
      type: "work",
      description: t.rich("work.comg.description", {
        ul: (chunks) => <ul className="list-inside list-disc">{chunks}</ul>,
        li: (chunks) => <li>{chunks}</li>,
        strong: (chunks) => <strong>{chunks}</strong>,
      }),
      stackIcons: [
        <SiAdobeillustrator size={size - sizeReducer} key="ai" />,
        <SiAdobephotoshop size={size - sizeReducer} key="ps" />,
        <SiAdobeindesign size={size - sizeReducer} key="id" />,
      ],
    },
    {
      date: t("education.studiom.date"),
      logo: (
        <Image
          src={studiom.src}
          alt={t("education.studiom.logo-alt")}
          width={200}
          height={200}
          className="rounded-full"
        />
      ),
      title: t("education.studiom.title"),
      localisation: t("education.studiom.localisation"),
      type: "education",
      stackIcons: [
        <SiAdobeillustrator size={size - sizeReducer} key="ai" />,
        <SiAdobephotoshop size={size - sizeReducer} key="ps" />,
        <SiAdobeindesign size={size - sizeReducer} key="id" />,
        <SiAdobedreamweaver size={size - sizeReducer} key="dw" />,
        <BiLogoHtml5 size={size} key="html" />,
        <BiLogoCss3 size={size} key="css" />,
        <RiJavascriptFill size={size} key="js" />,
      ],
    },
    {
      date: t("work.typoffset.date"),
      logo: (
        <Image
          src={typoffset.src}
          alt={t("work.typoffset.logo-alt")}
          width={200}
          height={200}
          className="rounded-full"
        />
      ),
      title: t("work.typoffset.title"),
      localisation: t("work.typoffset.localisation"),
      type: "work",
      description: t.rich("work.typoffset.description", {
        ul: (chunks) => <ul className="list-inside list-disc">{chunks}</ul>,
        li: (chunks) => <li>{chunks}</li>,
        strong: (chunks) => <strong>{chunks}</strong>,
      }),
      stackIcons: [
        <SiAdobeillustrator size={size - sizeReducer} key="ai" />,
        <SiAdobephotoshop size={size - sizeReducer} key="ps" />,
        <SiAdobeindesign size={size - sizeReducer} key="id" />,
      ],
    },
    {
      date: t("work.glazier.date"),
      logo: <GiCrackedGlass className="bg-white text-primary" />,
      title: t("work.glazier.title"),
      localisation: t("work.glazier.localisation"),
      type: "work",
      description: t.rich("work.glazier.description", {
        ul: (chunks) => <ul className="list-inside list-disc">{chunks}</ul>,
        li: (chunks) => <li>{chunks}</li>,
        strong: (chunks) => <strong>{chunks}</strong>,
      }),
      stackIcons: [
        <SiAdobeillustrator size={size - sizeReducer} key="ai" />,
        <SiCoreldraw size={size - sizeReducer} key="cdr" />,
      ],
    },
    {
      date: t("education.lfm.bma.date"),
      logo: <Image src={lfm.src} alt={t("education.lfm.logo-alt")} width={200} height={200} className="rounded-full" />,
      title: t("education.lfm.bma.title"),
      localisation: t("education.lfm.localisation"),
      type: "education",
      stackIcons: [
        <SiAdobeillustrator size={size - sizeReducer} key="ai" />,
        <SiAdobephotoshop size={size - sizeReducer} key="ps" />,
        <SiAdobeindesign size={size - sizeReducer} key="id" />,
      ],
    },
    {
      date: t("work.lrp.date"),
      logo: <Image src={lrp.src} alt={t("work.lrp.logo-alt")} width={200} height={200} className="rounded-full" />,
      title: t("work.lrp.title"),
      localisation: t("work.lrp.localisation"),
      type: "work",
      description: t.rich("work.lrp.description", {
        ul: (chunks) => <ul className="list-inside list-disc">{chunks}</ul>,
        li: (chunks) => <li>{chunks}</li>,
        strong: (chunks) => <strong>{chunks}</strong>,
      }),
      stackIcons: [
        <SiAdobeillustrator size={size - sizeReducer} key="ai" />,
        <SiAdobephotoshop size={size - sizeReducer} key="ps" />,
      ],
    },
    {
      date: t("work.vs.date"),
      logo: <Image src={vs.src} alt={t("work.vs.logo-alt")} width={200} height={200} className="rounded-full" />,
      title: t("work.vs.title"),
      localisation: t("work.vs.localisation"),
      type: "work",
      description: t.rich("work.vs.description", {
        ul: (chunks) => <ul className="list-inside list-disc">{chunks}</ul>,
        li: (chunks) => <li>{chunks}</li>,
        strong: (chunks) => <strong>{chunks}</strong>,
      }),
      stackIcons: [
        <SiAdobeillustrator size={size - sizeReducer} key="ai" />,
        <SiAdobephotoshop size={size - sizeReducer} key="ps" />,
      ],
    },
    {
      date: t("education.lfm.cap.date"),
      logo: <Image src={lfm.src} alt={t("education.lfm.logo-alt")} width={200} height={200} className="rounded-full" />,
      title: t("education.lfm.cap.title"),
      localisation: t("education.lfm.localisation"),
      type: "education",
      stackIcons: [
        <SiAdobeillustrator size={size - sizeReducer} key="ai" />,
        <SiAdobephotoshop size={size - sizeReducer} key="ps" />,
      ],
    },
  ]

  return (
    <VerticalTimeline lineColor="gray" className="w-full">
      {career.map((item, index) => (
        <VerticalTimelineElement
          key={index}
          visible={process.env.NODE_ENV !== "production"}
          date={item.date}
          dateClassName="md:dark:text-white md:text-black text-white"
          contentStyle={item.type === "work" ? { background: "#8D27FF" } : { background: "#B40A74" }}
          textClassName="text-white bg-none"
          icon={item.logo}
          iconClassName={`${item.type === "work" ? "bg-primary" : "bg-secondary"} text-white`}
          contentArrowStyle={{ borderRight: item.type === "work" ? "10px solid #8D27FF" : "10px solid #B40A74" }}
        >
          <RenderTimelineContent
            title={item.title}
            localisation={item.localisation}
            description={item.description}
            stackIcons={item.stackIcons}
          />
        </VerticalTimelineElement>
      ))}
    </VerticalTimeline>
  )
}
