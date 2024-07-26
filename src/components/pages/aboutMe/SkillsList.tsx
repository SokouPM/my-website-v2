"use client"

import { forwardRef, ReactElement, ReactNode, useRef } from "react"

import { AnimatedBeam } from "@/components/animations/animated-beam"
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
          "z-10 flex size-16 items-center justify-center overflow-hidden rounded-full bg-gray-300 p-2 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)] dark:bg-gray-800 sm:size-20",
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
        <div className="flex flex-1 flex-col justify-between gap-1">
          <Circle ref={reactIconRef} className="self-end">
            <ReactIcon size={size} />
          </Circle>
          <Circle ref={nextIconRef} className="self-center">
            <NextIcon className="rounded-full dark:border" size={size} />
          </Circle>
          <Circle ref={vueIconRef} className="self-start">
            <VueIcon size={size} />
          </Circle>
          <Circle ref={symfonyIconRef} className="self-center">
            <SymfonyIcon className="rounded-full dark:border" size={size} />
          </Circle>
          <Circle ref={typescriptIconRef} className="self-end">
            <TypescriptIcon size={size} />
          </Circle>
        </div>
        <div className="flex flex-col items-center justify-center">
          <Circle ref={logoRef} className="size-20 sm:size-24">
            <Logo />
          </Circle>
        </div>
        <div className="flex flex-1 flex-col justify-between gap-1">
          <Circle ref={nodeIconRef} className="self-start">
            <NodeIcon size={size} />
          </Circle>
          <Circle ref={phpIconRef} className="self-center">
            <PhpIcon size={size} />
          </Circle>
          <Circle ref={postgresqlIconRef} className="self-end">
            <PostgresIcon size={size} />
          </Circle>
          <Circle ref={mysqlIconRef} className="self-center">
            <MysqlIcon size={size} />
          </Circle>
          <Circle ref={dockerIconRef} className="self-start">
            <DockerIcon size={size} />
          </Circle>
        </div>
      </div>

      <AnimatedBeam containerRef={containerRef} fromRef={reactIconRef} toRef={logoRef} />
      <AnimatedBeam containerRef={containerRef} fromRef={nextIconRef} toRef={logoRef} />
      <AnimatedBeam containerRef={containerRef} fromRef={vueIconRef} toRef={logoRef} />
      <AnimatedBeam containerRef={containerRef} fromRef={symfonyIconRef} toRef={logoRef} />
      <AnimatedBeam containerRef={containerRef} fromRef={typescriptIconRef} toRef={logoRef} />

      <AnimatedBeam containerRef={containerRef} fromRef={nodeIconRef} toRef={logoRef} reverse />
      <AnimatedBeam containerRef={containerRef} fromRef={phpIconRef} toRef={logoRef} reverse />
      <AnimatedBeam containerRef={containerRef} fromRef={postgresqlIconRef} toRef={logoRef} reverse />
      <AnimatedBeam containerRef={containerRef} fromRef={mysqlIconRef} toRef={logoRef} reverse />
      <AnimatedBeam containerRef={containerRef} fromRef={dockerIconRef} toRef={logoRef} reverse />
    </div>
  )
}
