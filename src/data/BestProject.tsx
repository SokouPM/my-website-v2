"use client"

import squidMarketPlace from "/public/images/projects/web/squidMarketPlace.png"
import makeYourDish from "/public/images/projects/web/makeYourDish.png"
import implicActionJob from "/public/images/projects/web/implicActionJob.png"

import React from "react"
import { SiAxios, SiExpress, SiPrisma } from "react-icons/si"

import Project from "@/interfaces/project"

import { RiJavascriptFill, RiNextjsFill, RiSupabaseFill } from "react-icons/ri"
import { BiLogoDocker, BiLogoPostgresql, BiLogoReact, BiLogoTailwindCss, BiLogoTypescript } from "react-icons/bi"
import { FaStripe } from "react-icons/fa6"

import { Badge } from "@/components/ui/badge"

const baseBadgeClassName: string = "size-max bg-transparent px-0 text-black dark:text-white md:h-6 md:px-2.5"

const normalBadgeColorClassName: string = `${baseBadgeClassName} md:bg-secondary md:text-white md:hover:bg-secondary`
const disabledBadgeColorClassName: string = `${baseBadgeClassName} opacity-50 md:bg-black md:text-white md:hover:bg-black dark:md:bg-white md:dark:text-black dark:md:hover:bg-white`
const newBadgeColorClassName: string = `${baseBadgeClassName} md:bg-primary md:text-white md:hover:bg-primary`

const iconClassName: string = "size-6 md:mr-1 md:size-4"
const textClassName: string = "sr-only md:not-sr-only"

const BestProjects: Project[] = [
  {
    title: "Squid Marketplace",
    src: squidMarketPlace,
    github: "https://github.com/SokouPM/squid-marketplace-frontend",
    link: "https://squid-marketplace-frontend.vercel.app",
    description: "projects.squid-marketplace",
    stackIcons: [
      <Badge key="js" className={normalBadgeColorClassName}>
        <RiJavascriptFill className={iconClassName} />
        <p className={textClassName}>JavaScript</p>
      </Badge>,
      <Badge key="react" className={normalBadgeColorClassName}>
        <BiLogoReact className={iconClassName} />
        <p className={textClassName}>React</p>
      </Badge>,
      <Badge key="next" className={normalBadgeColorClassName}>
        <RiNextjsFill className={iconClassName} />
        <p className={textClassName}>Next.js</p>
      </Badge>,
      <Badge key="tailwind" className={normalBadgeColorClassName}>
        <BiLogoTailwindCss className={iconClassName} />
        <p className={textClassName}>Tailwind CSS</p>
      </Badge>,
      <Badge key="axios" className={disabledBadgeColorClassName}>
        <SiAxios className={iconClassName} />
        <p className={textClassName}>Axios</p>
      </Badge>,
      <Badge key="stripe" className={disabledBadgeColorClassName}>
        <FaStripe className={iconClassName} />
        <p className={textClassName}>Stripe</p>
      </Badge>,
      <Badge key="supabase" className={newBadgeColorClassName}>
        <RiSupabaseFill className={iconClassName} />
        <p className={textClassName}>Supabase</p>
      </Badge>,
    ],
  },
  {
    title: "Implic'action - job",
    src: implicActionJob,
    github: "https://github.com/Implic-Action/job",
    link: "http://jobs.leboncitoyen.fr",
    description: "projects.implic-action-job",
    stackIcons: [
      <Badge key="react" className={normalBadgeColorClassName}>
        <BiLogoReact className={iconClassName} />
        <p className={textClassName}>React</p>
      </Badge>,
      <Badge key="ts" className={normalBadgeColorClassName}>
        <BiLogoTypescript className={iconClassName} />
        <p className={textClassName}>TypeScript</p>
      </Badge>,
      <Badge key="next" className={normalBadgeColorClassName}>
        <RiNextjsFill className={iconClassName} />
        <p className={textClassName}>Next.js</p>
      </Badge>,
      <Badge key="tailwind" className={normalBadgeColorClassName}>
        <BiLogoTailwindCss className={iconClassName} />
        <p className={textClassName}>Tailwind CSS</p>
      </Badge>,
      <Badge key="axios" className={normalBadgeColorClassName}>
        <SiAxios className={iconClassName} />
        <p className={textClassName}>Axios</p>
      </Badge>,
      <Badge key="prisma" className={normalBadgeColorClassName}>
        <SiPrisma className={iconClassName} />
        <p className={textClassName}>Prisma</p>
      </Badge>,
      <Badge key="postgresql" className={normalBadgeColorClassName}>
        <BiLogoPostgresql className={iconClassName} />
        <p className={textClassName}>PostgreSQL</p>
      </Badge>,
      <Badge key="docker" className={normalBadgeColorClassName}>
        <BiLogoDocker className={iconClassName} />
        <p className={textClassName}>Docker</p>
      </Badge>,
    ],
  },
  {
    title: "Make Your Dish",
    src: makeYourDish,
    github: "https://github.com/makeyourdish",
    link: "http://makeyourdish.dga-code.fr",
    description: "projects.make-your-dish",
    stackIcons: [
      <Badge key="js" className={normalBadgeColorClassName}>
        <RiJavascriptFill className={iconClassName} />
        <p className={textClassName}>JavaScript</p>
      </Badge>,
      <Badge key="react" className={normalBadgeColorClassName}>
        <BiLogoReact className={iconClassName} />
        <p className={textClassName}>React</p>
      </Badge>,
      <Badge key="next" className={normalBadgeColorClassName}>
        <RiNextjsFill className={iconClassName} />
        <p className={textClassName}>Next.js</p>
      </Badge>,
      <Badge key="tailwind" className={normalBadgeColorClassName}>
        <BiLogoTailwindCss className={iconClassName} />
        <p className={textClassName}>Tailwind CSS</p>
      </Badge>,
      <Badge key="axios" className={normalBadgeColorClassName}>
        <SiAxios className={iconClassName} />
        <p className={textClassName}>Axios</p>
      </Badge>,
      <Badge key="express" className={normalBadgeColorClassName}>
        <SiExpress className={iconClassName} />
        <p className={textClassName}>Express</p>
      </Badge>,
      <Badge key="prisma" className={normalBadgeColorClassName}>
        <SiPrisma className={iconClassName} />
        <p className={textClassName}>Prisma</p>
      </Badge>,
      <Badge key="postgresql" className={normalBadgeColorClassName}>
        <BiLogoPostgresql className={iconClassName} />
        <p className={textClassName}>PostgreSQL</p>
      </Badge>,
    ],
  },
]

export default BestProjects
