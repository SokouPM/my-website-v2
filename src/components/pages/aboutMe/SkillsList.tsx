import { ReactElement } from "react"

import { DockerIcon } from "@/components/icons/DockerIcon"
import { JavascriptIcon } from "@/components/icons/JavascriptIcon"
import { MysqlIcon } from "@/components/icons/MysqlIcon"
import { NextIcon } from "@/components/icons/NextIcon"
import { NodeIcon } from "@/components/icons/NodeIcon"
import { PhpIcon } from "@/components/icons/PhpIcon"
import { PostgresIcon } from "@/components/icons/PostgresIcon"
import { ReactIcon } from "@/components/icons/ReactIcon"
import { SymfonyIcon } from "@/components/icons/SymfonyIcon"
import { TailwindIcon } from "@/components/icons/TaiwindIcon"
import { TypescriptIcon } from "@/components/icons/TypescriptIcon"
import { VueIcon } from "@/components/icons/VueIcon"

export default function SkillsList(): ReactElement {
  const size: number = 60

  return (
    <ul className="mb-10 grid grid-cols-2 gap-y-10 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
      <li className="flex h-max flex-col items-center gap-2">
        <ReactIcon size={size} />
        <strong className="text-xl font-normal">React</strong>
      </li>
      <li className="flex h-max flex-col items-center gap-2">
        <NextIcon size={size} className="rounded-full dark:border" />
        <strong className="text-xl font-normal">Next.js</strong>
      </li>
      <li className="flex h-max flex-col items-center gap-2">
        <VueIcon size={size} />
        <strong className="text-xl font-normal">Vue.js</strong>
      </li>
      <li className="flex h-max flex-col items-center gap-2">
        <SymfonyIcon size={size} className="rounded-full dark:border" />
        <strong className="text-xl font-normal">Symfony</strong>
      </li>
      <li className="flex h-max flex-col items-center gap-2">
        <JavascriptIcon size={size} className="rounded" />
        <strong className="text-xl font-normal">Javascript</strong>
      </li>
      <li className="flex h-max flex-col items-center gap-2">
        <TypescriptIcon size={size} className="rounded" />
        <strong className="text-xl font-normal">Typescript</strong>
      </li>
      <li className="flex h-max flex-col items-center gap-2">
        <NodeIcon size={size} />
        <strong className="text-xl font-normal">Node.js</strong>
      </li>
      <li className="flex h-max flex-col items-center gap-2">
        <PhpIcon size={size} />
        <strong className="text-xl font-normal">PHP</strong>
      </li>
      <li className="flex h-max flex-col items-center gap-2">
        <TailwindIcon size={size} />
        <strong className="text-xl font-normal">Tailwind CSS</strong>
      </li>
      <li className="flex h-max flex-col items-center gap-2">
        <PostgresIcon size={size} />
        <strong className="text-xl font-normal">PostgresSQL</strong>
      </li>
      <li className="flex h-max flex-col items-center gap-2">
        <MysqlIcon size={size} />
        <strong className="text-xl font-normal">MySQL</strong>
      </li>
      <li className="flex h-max flex-col items-center gap-2">
        <DockerIcon size={size} />
        <strong className="text-xl font-normal">Docker</strong>
      </li>
    </ul>
  )
}
