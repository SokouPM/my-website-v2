"use client"

import squidMarketPlace from "/public/images/projects/web/squidMarketPlace.png"
import makeYourDish from "/public/images/projects/web/makeYourDish.png"
import implicActionJob from "/public/images/projects/web/implicActionJob.png"

import React from "react"
import { SiAxios, SiExpress, SiPrisma } from "react-icons/si"

import ProjectInterface from "../../types/project"

import { RiJavascriptFill, RiNextjsFill, RiSupabaseFill } from "react-icons/ri"
import { BiLogoDocker, BiLogoPostgresql, BiLogoReact, BiLogoTailwindCss, BiLogoTypescript } from "react-icons/bi"
import { FaStripe } from "react-icons/fa6"

import { Badge } from "@/components/ui/badge"

const size: number = 15

const badgeClassName: string = "bg-secondary text-white hover:bg-secondary h-5"
const disabledBadgeClassName: string = "bg-white text-black hover:bg-white opacity-50 h-5"
const newBadgeClassName: string = "bg-primary text-white hover:bg-primary h-5"

const iconClassName: string = "mr-1"

const BestProjects: ProjectInterface[] = [
  {
    title: "Squid Marketplace",
    src: squidMarketPlace,
    github: "https://github.com/SokouPM/squid-marketplace-frontend",
    link: "https://squid-marketplace-frontend.vercel.app",
    description: "projects.squid-marketplace",
    stackIcons: [
      <Badge key="js" className={badgeClassName}>
        <RiJavascriptFill size={size} className={iconClassName} />
        JavaScript
      </Badge>,
      <Badge key="react" className={badgeClassName}>
        <BiLogoReact size={size} className={iconClassName} />
        React
      </Badge>,
      <Badge key="next" className={badgeClassName}>
        <RiNextjsFill size={size} className={iconClassName} />
        Next.js
      </Badge>,
      <Badge key="tailwind" className={badgeClassName}>
        <BiLogoTailwindCss size={size} className={iconClassName} />
        Tailwind CSS
      </Badge>,
      <Badge key="axios" className={disabledBadgeClassName}>
        <SiAxios size={size} className={iconClassName} />
        Axios
      </Badge>,
      <Badge key="stripe" className={disabledBadgeClassName}>
        <FaStripe size={size} className={iconClassName} />
        Stripe
      </Badge>,
      <Badge key="supabase" className={newBadgeClassName}>
        <RiSupabaseFill size={size} className={iconClassName} />
        Supabase
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
      <Badge key="react" className={badgeClassName}>
        <BiLogoReact size={size} className={iconClassName} />
        React
      </Badge>,
      <Badge key="ts" className={badgeClassName}>
        <BiLogoTypescript size={size} className={iconClassName} />
        TypeScript
      </Badge>,
      <Badge key="next" className={badgeClassName}>
        <RiNextjsFill size={size} className={iconClassName} />
        Next.js
      </Badge>,
      <Badge key="tailwind" className={badgeClassName}>
        <BiLogoTailwindCss size={size} className={iconClassName} />
        Tailwind CSS
      </Badge>,
      <Badge key="axios" className={badgeClassName}>
        <SiAxios size={size} className={iconClassName} />
        Axios
      </Badge>,
      <Badge key="prisma" className={badgeClassName}>
        <SiPrisma size={size} className={iconClassName} />
        Prisma
      </Badge>,
      <Badge key="postgresql" className={badgeClassName}>
        <BiLogoPostgresql size={size} className={iconClassName} />
        PostgreSQL
      </Badge>,
      <Badge key="docker" className={badgeClassName}>
        <BiLogoDocker size={size} className={iconClassName} />
        Docker
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
      <Badge key="js" className={badgeClassName}>
        <RiJavascriptFill size={size} className={iconClassName} />
        JavaScript
      </Badge>,
      <Badge key="react" className={badgeClassName}>
        <BiLogoReact size={size} className={iconClassName} />
        React
      </Badge>,
      <Badge key="next" className={badgeClassName}>
        <RiNextjsFill size={size} className={iconClassName} />
        Next.js
      </Badge>,
      <Badge key="tailwind" className={badgeClassName}>
        <BiLogoTailwindCss size={size} className={iconClassName} />
        Tailwind CSS
      </Badge>,
      <Badge key="axios" className={badgeClassName}>
        <SiAxios size={size} className={iconClassName} />
        Axios
      </Badge>,
      <Badge key="express" className={badgeClassName}>
        <SiExpress size={size} className={iconClassName} />
        Express
      </Badge>,
      <Badge key="prisma" className={badgeClassName}>
        <SiPrisma size={size} className={iconClassName} />
        Prisma
      </Badge>,
      <Badge key="postgresql" className={badgeClassName}>
        <BiLogoPostgresql size={size} className={iconClassName} />
        PostgreSQL
      </Badge>,
    ],
  },
]

export default BestProjects
