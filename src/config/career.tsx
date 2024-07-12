import Image from "next/image"
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

export interface careerInterface {
  date: string
  logo: ReactElement
  title: string
  localisation: string
  description?: ReactNode
  type: "work" | "education"
  stackIcons?: ReactElement[]
}

const size: number = 35
const sizeReducer: number = 8

export const career: careerInterface[] = [
  {
    date: "Octobre 2022 - Octobre 2024",
    logo: <Image src={anfsi.src} alt="Logo ANFSI" width={200} height={200} className="rounded-full" />,
    title: "Apprenti Développeur Fullstack",
    localisation: "ANFSI - Issy-les-Moulineaux, Hauts-de-Seine (92)",
    description: (
      <ul className="list-inside list-disc">
        <li>
          <strong>Conception</strong> et <strong>développement</strong> d’<strong>application web</strong>{" "}
          <strong>full-stack</strong> :
          <ol className="list-inside list-decimal pl-10">
            <li>Site de recrutement (Compte candidat)</li>
            <li>Plateforme de gestion des réserviste (Minotaur)</li>
          </ol>
        </li>
        <li>
          Aide à la <strong>conception de site web</strong>
        </li>
        <li>
          <strong>Modélisation de données</strong>
        </li>
        <li>
          <strong>Développement full-stack</strong>
        </li>
        <li>Travail collaboratif</li>
        <li>Integration continue</li>
      </ul>
    ),
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
    date: "Octobre 2022 - Octobre 2024",
    logo: <Image src={sdv.src} alt="Logo Sup de Vinci" width={200} height={200} className="rounded-full" />,
    title: "Master Expert des Systèmes d’Information - Spécialisation Développement",
    localisation: "Sup de vinci - La Défense, Hauts-de-Seine (92)",
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
    date: "Novembre 2021 - Octobre 2022",
    logo: <Image src={deletec.src} alt="Logo DELETEC" width={200} height={200} className="rounded-full" />,
    title: "Apprenti Développeur Web / Chef de projet",
    localisation: "DELETEC - Paris (75)",
    description: (
      <ul className="list-inside list-disc">
        <li>
          Réalisation de l'ensemble des tâches deux projets de développement :
          <ol className="list-inside list-decimal pl-10">
            <li>
              <strong>Application</strong> de gestion des spécificités RGPD des clients
            </li>
            <li>Portail client multi tenant de gestion des services fournis par DELETEC</li>
          </ol>
        </li>
        <li>
          <strong>Organisation</strong> et animation des réunions de présentations et de prises décisions
        </li>
        <li>
          <strong>Définition des tâches</strong> et des étapes du projet
        </li>
        <li>
          Création et présentation des <strong>maquettes</strong> de l'<strong>application</strong>
        </li>
        <li>
          <strong>Développement</strong> des versions selon le cahier des charges
        </li>
      </ul>
    ),
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
    date: "Septembre 2021 - Septembre 2022",
    logo: <Image src={sdv.src} alt="Logo Sup de Vinci" width={200} height={200} className="rounded-full" />,
    title: "Bachelor 3 Administrateur des Systèmes d'Information - Spécialisation Développement",
    localisation: "Sup de vinci - La Défense, Hauts-de-Seine (92)",
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
    date: "Mai - Juillet 2020",
    logo: <Image src={tr.src} alt="Logo la Team Rocket" width={200} height={200} className="rounded-full" />,
    title: "Stagiaire Développeur Web et web mobile / Chef de projet",
    localisation: "La Team Rocket - Toulouse, Haute-Garonne (31)",
    description: (
      <ul className="list-inside list-disc">
        <li>
          <strong>Maquettage</strong> et <strong>conception</strong> d’une <strong>application web</strong>
        </li>
        <li>
          Travail en <strong>méthode Agile</strong> (<strong>SCRUM</strong>)
        </li>
        <li>
          <strong>Travail en équipe</strong> de 5 personnes
        </li>
        <li>
          <strong>Développement Front-End</strong> d’une application en <strong>MVC</strong> (<strong>HTML</strong> /{" "}
          <strong>CSS</strong> / <strong>JAVASCRIPT</strong>)
        </li>
        <li>
          <strong>Développement Back-End</strong> d’une application en <strong>MVC</strong> (<strong>PHP</strong>)
        </li>
        <li>
          Création et gestion d’une <strong>base de données</strong> (<strong>SQL</strong> / <strong>MySQL</strong>)
        </li>
      </ul>
    ),
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
    date: "Novembre 2019 - Juillet 2020",
    logo: <Image src={afpa.src} alt="Logo AFPA" width={200} height={200} className="rounded-full" />,
    title: "Titre professionnel Développeur Web et web mobile",
    localisation: "AFPA - Balma, Haute-Garonne (31)",
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
    date: "Septembre 2014 - Septembre 2019",
    logo: <Image src={cpmgn.src} alt="Logo CPMGN" width={200} height={200} className="rounded-full" />,
    title: "Gendarme Adjoint volontaire designer",
    localisation: "CPMGN - Limoges, Haute-Vienne (87)",
    description: (
      <ul className="list-inside list-disc">
        <li>
          Création de <strong>jaquette de dvd</strong>
        </li>
        <li>
          <strong>Dessin vectoriel</strong> / <strong>Retouche photo</strong> / <strong>Photomontage</strong>
        </li>
        <li>
          <strong>Mise en page</strong>
        </li>
        <li>
          <strong>Travail en autonomie</strong> ou en équipe (de 2 à 10 personnes)
        </li>
        <li>
          <strong>Travail avec échéances</strong>
        </li>
        <li>
          Présentation de projets / <strong>Contact client</strong> / <strong>Analyse des besoins</strong>
        </li>
      </ul>
    ),
    type: "work",
    stackIcons: [
      <SiAdobeillustrator size={size - sizeReducer} key="ai" />,
      <SiAdobephotoshop size={size - sizeReducer} key="ps" />,
      <SiAdobeindesign size={size - sizeReducer} key="id" />,
    ],
  },
  {
    date: "Août 2014 - Septembre 2014",
    logo: (
      <Image
        src={eg.src}
        alt="Logo école de Gendarmerie de Montluçon"
        width={200}
        height={200}
        className="rounded-full"
      />
    ),
    title: "Élève Gendarme Adjoint Volontaire",
    localisation: "École de Gendarmerie de Montluçon, Allier (03)",
    type: "education",
  },
  {
    date: "Mai - Juillet 2014",
    logo: <Image src={scgd.src} alt="Logo Studio CG Designer" width={200} height={200} className="rounded-full" />,
    title: "Stagiaire designer / PAO",
    localisation: "Studio CG Designer - Narbonne, Aude (11)",
    description: (
      <ul className="list-inside list-disc">
        <li>
          <strong>Maquettage</strong> de <strong>site web</strong>
        </li>
        <li>
          <strong>Création graphique</strong> (<strong>affiche</strong>, <strong>flyers</strong>, <strong>logo</strong>{" "}
          ...)
        </li>
        <li>
          <strong>Dessin vectoriel</strong> / <strong>Retouche photo</strong> / <strong>Photomontage</strong>
        </li>
        <li>
          <strong>Mise en page</strong>
        </li>
      </ul>
    ),
    type: "work",
    stackIcons: [
      <SiAdobeillustrator size={size - sizeReducer} key="ai" />,
      <SiAdobephotoshop size={size - sizeReducer} key="ps" />,
      <SiAdobeindesign size={size - sizeReducer} key="id" />,
    ],
  },
  {
    date: "Septembre 2013 - Juin 2014",
    logo: (
      <Image
        src={jfc.src}
        alt="Logo Lyçée Jean François Champollion"
        width={200}
        height={200}
        className="rounded-full"
      />
    ),
    title: "1ʳᵉ année BTS Design d'espace et volume",
    localisation: "Lycee Jean François Champollion - Lattes, Hérault (34)",
    type: "education",
    stackIcons: [
      <SiAdobeillustrator size={size - sizeReducer} key="ai" />,
      <SiAdobephotoshop size={size - sizeReducer} key="ps" />,
      <SiAdobeindesign size={size - sizeReducer} key="id" />,
    ],
  },
  {
    date: "Avril - Mai 2013",
    logo: <Image src={creapub.src} alt="Logo imprimerie Créapub" width={200} height={200} className="rounded-full" />,
    title: "Stagiaire designer et imprimeur Offset",
    localisation: "Créapub - Béziers, Hérault (34)",
    type: "work",
    description: (
      <ul className="list-inside list-disc">
        <li>
          <strong>Création graphique</strong> (<strong>affiche</strong>, <strong>flyers</strong>, ...)
        </li>
        <li>
          Préparation de fichier pour l’<strong>impression</strong>
        </li>
        <li>
          <strong>Impression</strong> offset
        </li>
      </ul>
    ),
    stackIcons: [
      <SiAdobeillustrator size={size - sizeReducer} key="ai" />,
      <SiAdobephotoshop size={size - sizeReducer} key="ps" />,
      <SiAdobeindesign size={size - sizeReducer} key="id" />,
    ],
  },
  {
    date: "Mars - Avril 2013",
    logo: <Image src={comg.src} alt="Logo Com Gaudry" width={200} height={200} className="rounded-full" />,
    title: "Stagiaire designer",
    localisation: "Com Gaudry - Sérignan, Hérault (34)",
    type: "work",
    description: (
      <ul className="list-inside list-disc">
        <li>
          <strong>Création graphique</strong> (<strong>affiche</strong>, <strong>flyers</strong>, ...)
        </li>
        <li>
          <strong>Maquettage</strong> de <strong>site web</strong>
        </li>
        <li>
          <strong>Dessin vectoriel</strong> / <strong>Retouche photo</strong> / <strong>Photomontage</strong>
        </li>
        <li>
          <strong>Mise en page</strong>
        </li>
      </ul>
    ),
    stackIcons: [
      <SiAdobeillustrator size={size - sizeReducer} key="ai" />,
      <SiAdobephotoshop size={size - sizeReducer} key="ps" />,
      <SiAdobeindesign size={size - sizeReducer} key="id" />,
    ],
  },
  {
    date: "Septembre 2013 - Juin 2014",
    logo: <Image src={studiom.src} alt="Logo Studio M" width={200} height={200} className="rounded-full" />,
    title: "1ʳᵉ année Bachelor Art et Multimedia",
    localisation: "Studio M - Montpellier, Hérault (34)",
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
    date: "Janvier - Mars 2012",
    logo: (
      <Image src={typoffset.src} alt="Logo imprimerie Typ'Offset" width={200} height={200} className="rounded-full" />
    ),
    title: "Stagiaire designer",
    localisation: "Typ'offset - Béziers, Hérault (34)",
    type: "work",
    description: (
      <ul className="list-inside list-disc">
        <li>
          <strong>Création graphique</strong> (<strong>affiche</strong>, <strong>flyers</strong>, ...)
        </li>
        <li>
          <strong>Travail en autonomie</strong>
        </li>
      </ul>
    ),
    stackIcons: [
      <SiAdobeillustrator size={size - sizeReducer} key="ai" />,
      <SiAdobephotoshop size={size - sizeReducer} key="ps" />,
      <SiAdobeindesign size={size - sizeReducer} key="id" />,
    ],
  },
  {
    date: "Mai - Juillet 2011",
    logo: <GiCrackedGlass className="bg-white text-primary" />,
    title: "Stagiaire designer de vitrail",
    localisation: "Atelier de vitrail d’art - Béziers, Hérault (34)",
    type: "work",
    description: (
      <ul className="list-inside list-disc">
        <li>
          Création de <strong>dessin</strong> pour <strong>vitrail</strong>
        </li>
        <li>
          <strong>Travail en équipe</strong> avec le maître verrier
        </li>
      </ul>
    ),
    stackIcons: [
      <SiAdobeillustrator size={size - sizeReducer} key="ai" />,
      <SiCoreldraw size={size - sizeReducer} key="cdr" />,
    ],
  },
  {
    date: "Septembre 2010 - Juillet 2012",
    logo: <Image src={lfm.src} alt="Logo lyçée Frédéric Mistral" width={200} height={200} className="rounded-full" />,
    title: "Brevet des métiers d'art - Option A graphiste en lettres et décor",
    localisation: "Lycee Frédéric Mistral - Nîmes, Gard (30)",
    type: "education",
    stackIcons: [
      <SiAdobeillustrator size={size - sizeReducer} key="ai" />,
      <SiAdobephotoshop size={size - sizeReducer} key="ps" />,
      <SiAdobeindesign size={size - sizeReducer} key="id" />,
    ],
  },
  {
    date: "Janvier - Février 2010",
    logo: (
      <Image
        src={lrp.src}
        alt="Logo Languedoc-roussillon publicité"
        width={200}
        height={200}
        className="rounded-full"
      />
    ),
    title: "Stagiaire sérigraphe",
    localisation: "Languedoc-roussillon publicité - Sauvian, Hérault (34)",
    type: "work",
    description: (
      <ul className="list-inside list-disc">
        <li>
          <strong>Création graphique</strong> (<strong>affiche</strong>, <strong>flyers</strong>, ...)
        </li>
        <li>Impression en sérigraphique</li>
      </ul>
    ),
    stackIcons: [
      <SiAdobeillustrator size={size - sizeReducer} key="ai" />,
      <SiAdobephotoshop size={size - sizeReducer} key="ps" />,
    ],
  },
  {
    date: "Mai - Juin 2009",
    logo: <Image src={vs.src} alt="Logo Vilar sérigraphie" width={200} height={200} className="rounded-full" />,
    title: "Stagiaire sérigraphe",
    localisation: "Vilar sérigraphie - Vendres, Hérault (34)",
    type: "work",
    description: (
      <ul className="list-inside list-disc">
        <li>
          <strong>Création graphique</strong> (<strong>affiche</strong>, <strong>flyers</strong>, ...)
        </li>
        <li>Impression en sérigraphique</li>
      </ul>
    ),
    stackIcons: [
      <SiAdobeillustrator size={size - sizeReducer} key="ai" />,
      <SiAdobephotoshop size={size - sizeReducer} key="ps" />,
    ],
  },
  {
    date: "Septembre 2008 - Juillet 2010",
    logo: <Image src={lfm.src} alt="Logo lyçée Frédéric Mistral" width={200} height={200} className="rounded-full" />,
    title: "CAP Sérigraphie industrielle",
    localisation: "Lycee Frédéric Mistral - Nîmes, Gard (30)",
    type: "education",
    stackIcons: [
      <SiAdobeillustrator size={size - sizeReducer} key="ai" />,
      <SiAdobephotoshop size={size - sizeReducer} key="ps" />,
    ],
  },
]
