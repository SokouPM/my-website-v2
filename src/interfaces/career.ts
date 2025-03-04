import { ReactElement, ReactNode } from "react"

export default interface CareerInterface {
  date: string
  logo?: { src: string; alt: string }
  title: string
  localisation: string
  description?: ReactNode
  type: "work" | "education"
  stackIcons?: ReactElement[]
}
