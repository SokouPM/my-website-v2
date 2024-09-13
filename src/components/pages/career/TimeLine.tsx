"use client"

import { useTranslations } from "next-intl"
import Image from "next/image"
import { ReactElement, ReactNode } from "react"
import { MdOutlineSchool, MdWorkOutline } from "react-icons/md"
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component"

import "react-vertical-timeline-component/style.min.css"
import career from "@/data/Career"
import { CareerInterface } from "@/interfaces/career"

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

  return (
    <VerticalTimeline lineColor="gray" className="w-full">
      {career.map((item: CareerInterface, index) => (
        <VerticalTimelineElement
          key={index}
          visible={process.env.NODE_ENV !== "production"}
          date={t(item.date)}
          dateClassName="md:dark:text-white md:text-black text-white"
          contentStyle={item.type === "work" ? { background: "#8D27FF" } : { background: "#B40A74" }}
          textClassName="text-white bg-none"
          icon={
            item.logo ? (
              <Image src={item.logo.src} alt={t(item.logo.alt)} width={200} height={200} className="rounded-full" />
            ) : item.type === "work" ? (
              <MdWorkOutline className="text-white" />
            ) : (
              <MdOutlineSchool className="text-white" />
            )
          }
          iconClassName={`${item.type === "work" ? "bg-primary" : "bg-secondary"} text-white`}
          contentArrowStyle={{ borderRight: item.type === "work" ? "10px solid #8D27FF" : "10px solid #B40A74" }}
        >
          <RenderTimelineContent
            title={t(item.title)}
            localisation={t(item.localisation)}
            description={
              item.description &&
              t.rich(item.description, {
                ul: (chunks) => <ul className="list-inside list-disc">{chunks}</ul>,
                ol: (chunks) => <ol className="list-inside list-decimal pl-10">{chunks}</ol>,
                li: (chunks) => <li>{chunks}</li>,
                strong: (chunks) => <strong>{chunks}</strong>,
              })
            }
            stackIcons={item.stackIcons}
          />
        </VerticalTimelineElement>
      ))}
    </VerticalTimeline>
  )
}
