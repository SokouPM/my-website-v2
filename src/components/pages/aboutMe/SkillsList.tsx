"use client"

import { forwardRef, ReactElement, ReactNode, useRef } from "react"

import { AnimatedBeam } from "@/components/animations/animated-beam"
import { LinkPreview } from "@/components/animations/link-preview"
import { DockerIcon } from "@/components/icons/DockerIcon"
import { MysqlIcon } from "@/components/icons/MysqlIcon"
import { NextIcon } from "@/components/icons/NextIcon"
import { NodeIcon } from "@/components/icons/NodeIcon"
import { PhpIcon } from "@/components/icons/PhpIcon"
import { PostgresIcon } from "@/components/icons/PostgresIcon"
import { ReactIcon } from "@/components/icons/ReactIcon"
import { SymfonyIcon } from "@/components/icons/SymfonyIcon"
import { TypescriptIcon } from "@/components/icons/TypescriptIcon"
import { VueIcon } from "@/components/icons/VueIcon"
import Logo from "@/components/Logo"
import { cn } from "@/lib/utils"

const Circle = forwardRef<HTMLDivElement, { className?: string; children?: ReactNode }>(
  ({ className, children }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "flex size-16 items-center justify-center overflow-hidden rounded-full bg-gray-300 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)] dark:bg-gray-800 sm:size-20",
          className,
        )}
      >
        {children}
      </div>
    )
  },
)

Circle.displayName = "Circle"

export default function SkillsList(): ReactElement {
  const containerRef = useRef<HTMLDivElement>(null)
  const logoRef = useRef<HTMLDivElement>(null)

  const reactIconRef = useRef<HTMLDivElement>(null)
  const nextIconRef = useRef<HTMLDivElement>(null)
  const vueIconRef = useRef<HTMLDivElement>(null)
  const symfonyIconRef = useRef<HTMLDivElement>(null)
  const typescriptIconRef = useRef<HTMLDivElement>(null)

  const nodeIconRef = useRef<HTMLDivElement>(null)
  const phpIconRef = useRef<HTMLDivElement>(null)
  const postgresqlIconRef = useRef<HTMLDivElement>(null)
  const mysqlIconRef = useRef<HTMLDivElement>(null)
  const dockerIconRef = useRef<HTMLDivElement>(null)

  const size = 50

  return (
    <div className="relative mx-auto flex min-h-max max-w-[600px] items-center justify-center" ref={containerRef}>
      <div className="flex size-full flex-row justify-between gap-2">
        <div className="order-2 flex flex-col items-center justify-center">
          <Circle ref={logoRef} className="size-20 sm:size-24">
            <Logo />
          </Circle>
        </div>

        <div className="order-1 flex flex-1 flex-col justify-between gap-1">
          <Circle ref={reactIconRef} className="self-end">
            <LinkPreview url="https://reactjs.org/" className="flex size-full items-center justify-center rounded-full">
              <ReactIcon size={size} />
            </LinkPreview>
          </Circle>
          <Circle ref={nextIconRef} className="self-center">
            <LinkPreview url="https://nextjs.org/" className="flex size-full items-center justify-center rounded-full">
              <NextIcon className="rounded-full dark:border" size={size} />
            </LinkPreview>
          </Circle>
          <Circle ref={vueIconRef} className="self-start">
            <LinkPreview url="https://vuejs.org/" className="flex size-full items-center justify-center rounded-full">
              <VueIcon size={size} />
            </LinkPreview>
          </Circle>
          <Circle ref={symfonyIconRef} className="self-center">
            <LinkPreview url="https://symfony.com/" className="flex size-full items-center justify-center rounded-full">
              <SymfonyIcon className="rounded-full dark:border" size={size} />
            </LinkPreview>
          </Circle>
          <Circle ref={typescriptIconRef} className="self-end">
            <LinkPreview
              url="https://www.typescriptlang.org/"
              className="flex size-full items-center justify-center rounded-full"
            >
              <TypescriptIcon size={size} />
            </LinkPreview>
          </Circle>
        </div>

        <div className="order-3 flex flex-1 flex-col justify-between gap-1">
          <Circle ref={nodeIconRef} className="self-start">
            <LinkPreview
              url={"https://nodejs.org/"}
              className="flex size-full items-center justify-center rounded-full"
            >
              <NodeIcon size={size} />
            </LinkPreview>
          </Circle>
          <Circle ref={phpIconRef} className="self-center">
            <LinkPreview url="https://www.php.net/" className="flex size-full items-center justify-center rounded-full">
              <PhpIcon size={size} />
            </LinkPreview>
          </Circle>
          <Circle ref={postgresqlIconRef} className="self-end">
            <LinkPreview
              url="https://www.postgresql.org/"
              className="flex size-full items-center justify-center rounded-full"
            >
              <PostgresIcon size={size} />
            </LinkPreview>
          </Circle>
          <Circle ref={mysqlIconRef} className="self-center">
            <LinkPreview
              url="https://www.mysql.com/"
              className="flex size-full items-center justify-center rounded-full"
            >
              <MysqlIcon size={size} />
            </LinkPreview>
          </Circle>
          <Circle ref={dockerIconRef} className="self-start">
            <LinkPreview
              url="https://www.docker.com/"
              className="flex size-full items-center justify-center rounded-full"
            >
              <DockerIcon size={size} />
            </LinkPreview>
          </Circle>
        </div>
      </div>

      <AnimatedBeam className="-z-10" containerRef={containerRef} fromRef={reactIconRef} toRef={logoRef} />
      <AnimatedBeam className="-z-10" containerRef={containerRef} fromRef={nextIconRef} toRef={logoRef} />
      <AnimatedBeam className="-z-10" containerRef={containerRef} fromRef={vueIconRef} toRef={logoRef} />
      <AnimatedBeam className="-z-10" containerRef={containerRef} fromRef={symfonyIconRef} toRef={logoRef} />
      <AnimatedBeam className="-z-10" containerRef={containerRef} fromRef={typescriptIconRef} toRef={logoRef} />

      <AnimatedBeam className="-z-10" containerRef={containerRef} fromRef={nodeIconRef} toRef={logoRef} reverse />
      <AnimatedBeam className="-z-10" containerRef={containerRef} fromRef={phpIconRef} toRef={logoRef} reverse />
      <AnimatedBeam className="-z-10" containerRef={containerRef} fromRef={postgresqlIconRef} toRef={logoRef} reverse />
      <AnimatedBeam className="-z-10" containerRef={containerRef} fromRef={mysqlIconRef} toRef={logoRef} reverse />
      <AnimatedBeam className="-z-10" containerRef={containerRef} fromRef={dockerIconRef} toRef={logoRef} reverse />
    </div>
  )
}
