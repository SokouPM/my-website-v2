import { StaticImageData } from "next/image"
import { ReactElement } from "react"

export default interface Project {
  title: string
  src: StaticImageData | string
  github?: string
  gitlab?: string
  link?: string
  description: string
  stackIcons: ReactElement[]
}
