"use client"

import { ReactElement } from "react"
import { MdOutlineLaptopMac, MdOutlineSchool } from "react-icons/md"
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component"

import "react-vertical-timeline-component/style.min.css"

import { career } from "@/config/career"

export default function TimeLine(): ReactElement {
  return (
    <VerticalTimeline lineColor="gray">
      {career.map((item, index) => (
        <VerticalTimelineElement
          key={index}
          visible={process.env.NODE_ENV !== "production"}
          date={item.date}
          dateClassName="dark:text-white text-black"
          contentStyle={item.type === "work" ? { background: "#8D27FF" } : { background: "#B40A74" }}
          textClassName="text-white bg-none"
          icon={item.type === "work" ? <MdOutlineLaptopMac /> : <MdOutlineSchool />}
          iconClassName={`${item.type === "work" ? "bg-primary" : "bg-secondary"} text-white`}
          contentArrowStyle={{ borderRight: item.type === "work" ? "10px solid #8D27FF" : "10px solid #B40A74" }}
        >
          <div className="flex flex-col space-y-3">
            <strong className="text-lg font-bold md:text-2xl">{item.title}</strong>
            <span className="italic md:text-lg">{item.localisation}</span>
            {item.description && <span className="text-sm md:text-base">{item.description}</span>}
            {item.stackIcons ? (
              <ul className="mt-5 flex flex-wrap items-center justify-center gap-2">
                {item.stackIcons.map((icon, index) => (
                  <li key={index}>{icon}</li>
                ))}
              </ul>
            ) : null}
          </div>
        </VerticalTimelineElement>
      ))}
    </VerticalTimeline>
  )
}
