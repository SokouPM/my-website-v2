"use client"

import { ReactElement, ReactNode } from "react"
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component"

import { career } from "@/config/career"

import "react-vertical-timeline-component/style.min.css"

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
