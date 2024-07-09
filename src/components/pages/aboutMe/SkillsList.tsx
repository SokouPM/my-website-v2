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
  return (
    <ul className="mb-10 grid grid-cols-2 gap-y-10 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
      <li className="flex h-32 flex-col items-center gap-2">
        <ReactIcon size={80} />
        <strong className="text-xl font-normal">React</strong>
      </li>
      <li className="flex h-32 flex-col items-center gap-2">
        <NextIcon size={80} className="rounded-full dark:border" />
        <strong className="text-xl font-normal">Next.js</strong>
      </li>
      <li className="flex h-32 flex-col items-center gap-2">
        <VueIcon size={80} />
        <strong className="text-xl font-normal">Vue.js</strong>
      </li>
      <li className="flex h-32 flex-col items-center gap-2">
        <SymfonyIcon size={80} className="rounded-full dark:border" />
        <strong className="text-xl font-normal">Symfony</strong>
      </li>
      <li className="flex h-32 flex-col items-center gap-2">
        <JavascriptIcon size={80} className="rounded" />
        <strong className="text-xl font-normal">Javascript</strong>
      </li>
      <li className="flex h-32 flex-col items-center gap-2">
        <TypescriptIcon size={80} className="rounded" />
        <strong className="text-xl font-normal">Typescript</strong>
      </li>
      <li className="flex h-32 flex-col items-center gap-2">
        <NodeIcon size={80} />
        <strong className="text-xl font-normal">Node.js</strong>
      </li>
      <li className="flex h-32 flex-col items-center gap-2">
        <PhpIcon size={80} />
        <strong className="text-xl font-normal">PHP</strong>
      </li>
      <li className="flex h-32 flex-col items-center gap-2">
        <TailwindIcon size={80} />
        <strong className="text-xl font-normal">Tailwind CSS</strong>
      </li>
      <li className="flex h-32 flex-col items-center gap-2">
        <PostgresIcon size={80} />
        <strong className="text-xl font-normal">PostgresSQL</strong>
      </li>
      <li className="flex h-32 flex-col items-center gap-2">
        <MysqlIcon size={80} />
        <strong className="text-xl font-normal">MySQL</strong>
      </li>
      <li className="flex h-32 flex-col items-center gap-2">
        <DockerIcon size={80} />
        <strong className="text-xl font-normal">Docker</strong>
      </li>
    </ul>
  )
}
