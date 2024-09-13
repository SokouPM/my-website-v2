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
import { RiJavascriptFill, RiNextjsFill } from "react-icons/ri"
import { SiAdobedreamweaver, SiAdobeillustrator, SiAdobeindesign, SiAdobephotoshop, SiCoreldraw } from "react-icons/si"
import { TbBrandKotlin } from "react-icons/tb"

import { CareerInterface } from "@/interfaces/career"

import afpa from "/public/images/career/afpa.png"
import anfsi from "/public/images/career/anfsi.jpeg"
import comg from "/public/images/career/comg.png"
import cpmgn from "/public/images/career/cpmgn.png"
import creapub from "/public/images/career/creapub.jpg"
import deletec from "/public/images/career/deletec.png"
import eg from "/public/images/career/eg.png"
import jfc from "/public/images/career/jfc.png"
import lfm from "/public/images/career/lfm.png"
import lrp from "/public/images/career/lrp.jpg"
import scgd from "/public/images/career/scgd.jpg"
import sdv from "/public/images/career/sdv.jpeg"
import studiom from "/public/images/career/studiom.png"
import tr from "/public/images/career/tr.png"
import typoffset from "/public/images/career/typoffset.png"
import vs from "/public/images/career/vs.jpg"

const size: number = 35
const sizeReducer: number = 8

const career: CareerInterface[] = [
  {
    date: "work.anfsi.date",
    logo: { src: anfsi.src, alt: "work.anfsi.logo-alt" },
    title: "work.anfsi.title",
    localisation: "work.anfsi.localisation",
    description: "work.anfsi.description",
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
    date: "education.sdv.master.date",
    logo: { src: sdv.src, alt: "education.sdv.logo-alt" },
    title: "education.sdv.master.title",
    localisation: "education.sdv.localisation",
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
    date: "work.deletec.date",
    logo: { src: deletec.src, alt: "work.deletec.logo-alt" },
    title: "work.deletec.title",
    localisation: "work.deletec.localisation",
    description: "work.deletec.description",
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
    date: "education.sdv.bachelor.date",
    logo: { src: sdv.src, alt: "education.sdv.logo-alt" },
    title: "education.sdv.bachelor.title",
    localisation: "education.sdv.localisation",
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
    date: "work.tr.date",
    logo: { src: tr.src, alt: "work.tr.logo-alt" },
    title: "work.tr.title",
    localisation: "work.tr.localisation",
    description: "work.tr.description",
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
    date: "education.afpa.date",
    logo: { src: afpa.src, alt: "education.afpa.logo-alt" },
    title: "education.afpa.title",
    localisation: "education.afpa.localisation",
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
    date: "work.cpmgn.date",
    logo: { src: cpmgn.src, alt: "work.cpmgn.logo-alt" },
    title: "work.cpmgn.title",
    localisation: "work.cpmgn.localisation",
    description: "work.cpmgn.description",
    type: "work",
    stackIcons: [
      <SiAdobeillustrator size={size - sizeReducer} key="ai" />,
      <SiAdobephotoshop size={size - sizeReducer} key="ps" />,
      <SiAdobeindesign size={size - sizeReducer} key="id" />,
    ],
  },
  {
    date: "education.eg.date",
    logo: { src: eg.src, alt: "education.eg.logo-alt" },
    title: "education.eg.title",
    localisation: "education.eg.localisation",
    type: "education",
  },
  {
    date: "work.scgd.date",
    logo: { src: scgd.src, alt: "work.scgd.logo-alt" },
    title: "work.scgd.title",
    localisation: "work.scgd.localisation",
    description: "work.scgd.description",
    type: "work",
    stackIcons: [
      <SiAdobeillustrator size={size - sizeReducer} key="ai" />,
      <SiAdobephotoshop size={size - sizeReducer} key="ps" />,
      <SiAdobeindesign size={size - sizeReducer} key="id" />,
    ],
  },
  {
    date: "education.jfc.date",
    logo: { src: jfc.src, alt: "education.jfc.logo-alt" },
    title: "education.jfc.title",
    localisation: "education.jfc.localisation",
    type: "education",
    stackIcons: [
      <SiAdobeillustrator size={size - sizeReducer} key="ai" />,
      <SiAdobephotoshop size={size - sizeReducer} key="ps" />,
      <SiAdobeindesign size={size - sizeReducer} key="id" />,
    ],
  },
  {
    date: "work.creapub.date",
    logo: { src: creapub.src, alt: "work.creapub.logo-alt" },
    title: "work.creapub.title",
    localisation: "work.creapub.localisation",
    type: "work",
    description: "work.creapub.description",
    stackIcons: [
      <SiAdobeillustrator size={size - sizeReducer} key="ai" />,
      <SiAdobephotoshop size={size - sizeReducer} key="ps" />,
      <SiAdobeindesign size={size - sizeReducer} key="id" />,
    ],
  },
  {
    date: "work.comg.date",
    logo: { src: comg.src, alt: "work.comg.logo-alt" },
    title: "work.comg.title",
    localisation: "work.comg.localisation",
    type: "work",
    description: "work.comg.description",
    stackIcons: [
      <SiAdobeillustrator size={size - sizeReducer} key="ai" />,
      <SiAdobephotoshop size={size - sizeReducer} key="ps" />,
      <SiAdobeindesign size={size - sizeReducer} key="id" />,
    ],
  },
  {
    date: "education.studiom.date",
    logo: { src: studiom.src, alt: "education.studiom.logo-alt" },
    title: "education.studiom.title",
    localisation: "education.studiom.localisation",
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
    date: "work.typoffset.date",
    logo: { src: typoffset.src, alt: "work.typoffset.logo-alt" },
    title: "work.typoffset.title",
    localisation: "work.typoffset.localisation",
    type: "work",
    description: "work.typoffset.description",
    stackIcons: [
      <SiAdobeillustrator size={size - sizeReducer} key="ai" />,
      <SiAdobephotoshop size={size - sizeReducer} key="ps" />,
      <SiAdobeindesign size={size - sizeReducer} key="id" />,
    ],
  },
  {
    date: "work.glazier.date",
    title: "work.glazier.title",
    localisation: "work.glazier.localisation",
    type: "work",
    description: "work.glazier.description",
    stackIcons: [
      <SiAdobeillustrator size={size - sizeReducer} key="ai" />,
      <SiCoreldraw size={size - sizeReducer} key="cdr" />,
    ],
  },
  {
    date: "education.lfm.bma.date",
    logo: { src: lfm.src, alt: "education.lfm.logo-alt" },
    title: "education.lfm.bma.title",
    localisation: "education.lfm.localisation",
    type: "education",
    stackIcons: [
      <SiAdobeillustrator size={size - sizeReducer} key="ai" />,
      <SiAdobephotoshop size={size - sizeReducer} key="ps" />,
      <SiAdobeindesign size={size - sizeReducer} key="id" />,
    ],
  },
  {
    date: "work.lrp.date",
    logo: { src: lrp.src, alt: "work.lrp.logo-alt" },
    title: "work.lrp.title",
    localisation: "work.lrp.localisation",
    type: "work",
    description: "work.lrp.description",
    stackIcons: [
      <SiAdobeillustrator size={size - sizeReducer} key="ai" />,
      <SiAdobephotoshop size={size - sizeReducer} key="ps" />,
    ],
  },
  {
    date: "work.vs.date",
    logo: { src: vs.src, alt: "work.vs.logo-alt" },
    title: "work.vs.title",
    localisation: "work.vs.localisation",
    type: "work",
    description: "work.vs.description",
    stackIcons: [
      <SiAdobeillustrator size={size - sizeReducer} key="ai" />,
      <SiAdobephotoshop size={size - sizeReducer} key="ps" />,
    ],
  },
  {
    date: "education.lfm.cap.date",
    logo: { src: lfm.src, alt: "education.lfm.logo-alt" },
    title: "education.lfm.cap.title",
    localisation: "education.lfm.localisation",
    type: "education",
    stackIcons: [
      <SiAdobeillustrator size={size - sizeReducer} key="ai" />,
      <SiAdobephotoshop size={size - sizeReducer} key="ps" />,
    ],
  },
]

export default career
