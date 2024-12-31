"use client"
import { AnimatePresence, motion } from "framer-motion"
import { useTranslations } from "next-intl"
import Image from "next/image"
import React, { ReactElement, RefObject, useEffect, useId, useRef, useState } from "react"
import { FaExternalLinkAlt, FaGithub, FaGitlab } from "react-icons/fa"
import { MdOutlineClose } from "react-icons/md"

import { BackgroundGradient } from "@/components/animations/background-gradient"
import { Button } from "@/components/ui/button"
import { useOutsideClick } from "@/hooks/useOutsideClick"
import ProjectInterface from "@/interfaces/project"
import { cn } from "@/lib/utils"

export function CardsProjectsList({
  projects,
  imgHeight,
  className,
}: {
  projects: ProjectInterface[]
  imgHeight?: string
  className?: string
}): ReactElement {
  const [active, setActive] = useState<(typeof projects)[number] | boolean | null>(null)
  const id: string = useId()
  const ref: RefObject<HTMLDivElement> = useRef<HTMLDivElement>(null)

  const t = useTranslations()

  useEffect((): (() => void) => {
    function onKeyDown(event: KeyboardEvent): void {
      if (event.key === "Escape") {
        setActive(false)
      }
    }

    if (active && typeof active === "object") {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }

    window.addEventListener("keydown", onKeyDown)

    return (): void => window.removeEventListener("keydown", onKeyDown)
  }, [active])

  useOutsideClick(ref, (): void => setActive(null))

  return (
    <>
      {/* ? ---------------------------------------------- Background ---------------------------------------------- */}
      <AnimatePresence>
        {active && typeof active === "object" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 size-full bg-background/20 backdrop-blur-sm"
          />
        )}
      </AnimatePresence>

      {/* ? --------------------------------------------- Card opened ---------------------------------------------- */}
      <AnimatePresence>
        {active && typeof active === "object" ? (
          <div className="fixed inset-0 z-50 grid place-items-center">
            <motion.button
              key={`button-${active.title}-${id}`}
              layout
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
                transition: {
                  duration: 0.05,
                },
              }}
              className="absolute top-10 right-10 z-20 inline-flex size-10 animate-bounce items-center justify-center whitespace-nowrap rounded-full border border-input bg-background lg:hidden"
              onClick={(): void => setActive(null)}
            >
              <MdOutlineClose />
              <p className="sr-only">{t("components.projects-card.close")}</p>
            </motion.button>
            <motion.div
              layoutId={`card-${active.title}-${id}`}
              ref={ref}
              className="card-diagonal-sides-opened mt-4 mb-auto size-full h-fit w-11/12 bg-background md:mt-auto md:max-w-[1000px]"
            >
              <BackgroundGradient
                className="card-diagonal-sides-opened size-full overflow-hidden bg-background p-2"
                gradientClassName="md:blur-xl"
              >
                <motion.div layoutId={`image-${active.title}-${id}`}>
                  <Image
                    priority
                    width={600}
                    height={400}
                    src={active.src}
                    draggable="false"
                    alt=""
                    className="card-diagonal-sides-top-opened w-full select-none object-cover object-top"
                  />
                </motion.div>
                <div>
                  <div className="flex flex-col items-start justify-between gap-4 p-4 md:flex-row">
                    <motion.h3 layoutId={`title-${active.title}-${id}`} className="font-bold text-3xl">
                      {active.title}
                    </motion.h3>

                    <div className="z-30 flex gap-3">
                      {active.github && (
                        <Button className="bg-gray-600 hover:bg-gray-700" size="sm" asChild>
                          <a href={active.github} target="_blank" rel="noreferrer">
                            <FaGithub className="text-xl md:mr-2" />
                            <span className="sr-only md:not-sr-only">{t("components.projects-card.github")}</span>
                          </a>
                        </Button>
                      )}
                      {active.gitlab && (
                        <Button className="bg-orange-700 hover:bg-orange-800" size="sm" asChild>
                          <a href={active.github} target="_blank" rel="noreferrer">
                            <FaGitlab className="text-xl md:mr-2" />
                            <span className="sr-only md:not-sr-only">{t("components.projects-card.gitlab")}</span>
                          </a>
                        </Button>
                      )}
                      {active.link && (
                        <Button size="sm" asChild>
                          <a href={active.link} target="_blank" rel="noreferrer">
                            <FaExternalLinkAlt className="text-xl md:mr-2" />
                            <span className="sr-only md:not-sr-only">{t("components.projects-card.link")}</span>
                          </a>
                        </Button>
                      )}
                    </div>
                  </div>
                  <div className="relative h-full p-4">
                    <motion.div
                      layout
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="flex h-72 flex-1 flex-col items-start gap-4 overflow-auto pb-10 text-sm md:h-fit md:text-base"
                    >
                      <p>{t(active.description)}</p>
                    </motion.div>
                    <ul className="ml-auto flex w-max gap-2">
                      {active.stackIcons.map((icon, index) => (
                        <li key={index}>{icon}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </BackgroundGradient>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>

      {/* ? ---------------------------------------------- Cards list ----------------------------------------------- */}
      <ul className={cn("grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3", className)}>
        {projects.map(
          (project: ProjectInterface, index: number): ReactElement => (
            <motion.li
              key={index}
              layoutId={`card-${project.title}-${id}`}
              onClick={(): void => setActive(project)}
              className="card-diagonal-sides flex cursor-pointer flex-col"
            >
              <BackgroundGradient
                key={index}
                className="card-diagonal-sides bg-background p-2 hover:bg-neutral-200 dark:hover:bg-neutral-800"
                gradientClassName="md:blur"
              >
                <motion.div layoutId={`image-${project.title}-${id}`}>
                  <Image
                    width={600}
                    height={100}
                    src={project.src}
                    draggable="false"
                    alt=""
                    className={`card-diagonal-sides-top mb-4 h-60 w-full select-none object-cover object-top ${imgHeight}`}
                  />
                </motion.div>
                <motion.h2
                  layoutId={`title-${project.title}-${id}`}
                  className="text-center font-bold text-lg text-neutral-800 dark:text-neutral-200"
                >
                  {project.title}
                </motion.h2>
              </BackgroundGradient>
            </motion.li>
          ),
        )}
      </ul>
    </>
  )
}
