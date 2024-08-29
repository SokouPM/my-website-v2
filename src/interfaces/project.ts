import { StaticImageData } from "next/image"
import { ReactElement } from "react"

export default interface ProjectInterface {
  title: string
  src: StaticImageData | string
  github?: string
  gitlab?: string
  link?: string
  description: string
  stackIcons: ReactElement[]
}
