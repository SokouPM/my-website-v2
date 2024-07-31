"use client"

import squidMarketPlace from "/public/images/projects/web/squidMarketPlace.png"

import React from "react"
import { SiAdobeillustrator, SiAdobephotoshop, SiAxios } from "react-icons/si"

import ProjectInterface from "../../types/project"

import { RiJavascriptFill, RiNextjsFill, RiSupabaseFill } from "react-icons/ri"
import { BiLogoReact, BiLogoTailwindCss } from "react-icons/bi"
import { FaStripe } from "react-icons/fa6"

const size: number = 35
const sizeReducer: number = 8

const BestProjects: ProjectInterface[] = [
  {
    title: "Squid Marketplace",
    src: squidMarketPlace,
    github: "https://github.com/SokouPM/squid-marketplace-frontend",
    link: "https://squid-marketplace-frontend.vercel.app/",
    description: "projects.squid-marketplace",
    stackIcons: [
      <RiJavascriptFill size={size} key="js" />,
      <BiLogoReact size={size} key="react" />,
      <RiNextjsFill size={size} key="next" />,
      <BiLogoTailwindCss size={size} key="tailwind" />,
      <RiSupabaseFill size={size - sizeReducer} key="supabase" />,
      <SiAxios size={size - sizeReducer} key="axios" className="opacity-30" />,
      <FaStripe size={size - sizeReducer} key="stripe" className="opacity-30" />,
    ],
  },
  {
    title: "Lorem ipsum 2",
    src: "https://dummyimage.com/600x200/878787/ffffff.jpg",
    github: "https://github.com",
    gitlab: "https://gitlab.com",
    link: "https://project.com",
    description: "TODO i18n text",
    stackIcons: [
      <SiAdobeillustrator size={size - sizeReducer} key="ai" />,
      <SiAdobephotoshop size={size - sizeReducer} key="ps" />,
    ],
  },
  {
    title: "Lorem ipsum 3",
    src: "https://dummyimage.com/600x200/878787/ffffff.jpg",
    github: "https://github.com",
    gitlab: "https://gitlab.com",
    link: "https://project.com",
    description: "TODO i18n text",
    stackIcons: [
      <SiAdobeillustrator size={size - sizeReducer} key="ai" />,
      <SiAdobephotoshop size={size - sizeReducer} key="ps" />,
    ],
  },
  {
    title: "Lorem ipsum 4",
    src: "https://dummyimage.com/600x200/878787/ffffff.jpg",
    github: "https://github.com",
    gitlab: "https://gitlab.com",
    link: "https://project.com",
    description: "TODO i18n text",
    stackIcons: [
      <SiAdobeillustrator size={size - sizeReducer} key="ai" />,
      <SiAdobephotoshop size={size - sizeReducer} key="ps" />,
    ],
  },
  {
    title: "Lorem ipsum 5",
    src: "https://dummyimage.com/600x200/878787/ffffff.jpg",
    github: "https://github.com",
    gitlab: "https://gitlab.com",
    link: "https://project.com",
    description: "TODO i18n text",
    stackIcons: [
      <SiAdobeillustrator size={size - sizeReducer} key="ai" />,
      <SiAdobephotoshop size={size - sizeReducer} key="ps" />,
    ],
  },
  {
    title: "Lorem ipsum 6",
    src: "https://dummyimage.com/600x200/878787/ffffff.jpg",
    github: "https://github.com",
    gitlab: "https://gitlab.com",
    link: "https://project.com",
    description: "TODO i18n text",
    stackIcons: [
      <SiAdobeillustrator size={size - sizeReducer} key="ai" />,
      <SiAdobephotoshop size={size - sizeReducer} key="ps" />,
    ],
  },
]

export default BestProjects
