"use client"
import { AnimatePresence, motion } from "framer-motion"
import Image from "next/image"
import React, { ReactElement, useEffect, useId, useRef, useState } from "react"
import { FaExternalLinkAlt, FaGithub, FaGitlab } from "react-icons/fa"
import { SiAdobeillustrator, SiAdobephotoshop } from "react-icons/si"

import ShineBorder from "@/components/animations/shine-border"
import { Button } from "@/components/ui/button"
import { useOutsideClick } from "@/hooks/useOutsideClick"

const size: number = 35
const sizeReducer: number = 8

const projects = [
  {
    title: "Lorem ipsum 1",
    src: "https://dummyimage.com/600x200/878787/ffffff.jpg",
    github: "https://github.com",
    gitlab: "https://gitlab.com",
    link: "https://project.com",
    content: (): ReactElement => {
      return (
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
          est laborum
        </p>
      )
    },
    stackIcons: [
      <SiAdobeillustrator size={size - sizeReducer} key="ai" />,
      <SiAdobephotoshop size={size - sizeReducer} key="ps" />,
    ],
  },
  {
    title: "Lorem ipsum 2",
    src: "https://dummyimage.com/600x200/878787/ffffff.jpg",
    github: "https://github.com",
    gitlab: "https://gitlab.com",
    link: "https://project.com",
    content: (): ReactElement => {
      return (
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
          est laborum
        </p>
      )
    },
    stackIcons: [
      <SiAdobeillustrator size={size - sizeReducer} key="ai" />,
      <SiAdobephotoshop size={size - sizeReducer} key="ps" />,
    ],
  },
  {
    title: "Lorem ipsum 3",
    src: "https://dummyimage.com/600x200/878787/ffffff.jpg",
    github: "https://github.com",
    gitlab: "https://gitlab.com",
    link: "https://project.com",
    content: (): ReactElement => {
      return (
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
          est laborum
        </p>
      )
    },
    stackIcons: [
      <SiAdobeillustrator size={size - sizeReducer} key="ai" />,
      <SiAdobephotoshop size={size - sizeReducer} key="ps" />,
    ],
  },
  {
    title: "Lorem ipsum 4",
    src: "https://dummyimage.com/600x200/878787/ffffff.jpg",
    github: "https://github.com",
    gitlab: "https://gitlab.com",
    link: "https://project.com",
    content: (): ReactElement => {
      return (
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
          est laborum
        </p>
      )
    },
    stackIcons: [
      <SiAdobeillustrator size={size - sizeReducer} key="ai" />,
      <SiAdobephotoshop size={size - sizeReducer} key="ps" />,
    ],
  },
]

export function ProjectCardsList(): ReactElement {
  const [active, setActive] = useState<(typeof projects)[number] | boolean | null>(null)
  const id = useId()
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
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

  useOutsideClick(ref, () => setActive(null))

  return (
    <>
      {/* ? ---------------------------------------------- Background ---------------------------------------------- */}
      <AnimatePresence>
        {active && typeof active === "object" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 size-full bg-black/20 backdrop-blur-sm dark:bg-white/20"
          />
        )}
      </AnimatePresence>

      {/* ? --------------------------------------------- Card opened ---------------------------------------------- */}
      <AnimatePresence>
        {active && typeof active === "object" ? (
          <div className="fixed inset-0 z-50 grid place-items-center">
            <motion.div
              layoutId={`card-${active.title}-${id}`}
              ref={ref}
              className="mb-auto mt-4 size-full h-fit w-11/12 rounded-xl bg-background shadow-2xl shadow-secondary md:mt-auto md:max-w-[1000px] md:rounded-2xl"
            >
              <ShineBorder
                borderRadius={10}
                borderWidth={5}
                color={["#8D27FF", "#B40A74"]}
                className="size-full overflow-hidden p-3"
              >
                <motion.div layoutId={`image-${active.title}-${id}`}>
                  <Image
                    priority
                    width={600}
                    height={400}
                    src={active.src}
                    draggable="false"
                    alt=""
                    className="w-full select-none object-cover object-top sm:rounded"
                  />
                </motion.div>
                <div>
                  <div className="flex flex-col items-start justify-between gap-4 p-4 md:flex-row">
                    <motion.h3 layoutId={`title-${active.title}-${id}`} className="text-3xl font-bold">
                      {active.title}
                    </motion.h3>

                    <div className="z-30 flex gap-3">
                      {active.github && (
                        <Button className="bg-gray-600 hover:bg-gray-700" size="sm" asChild>
                          <a href={active.github} target="_blank" rel="noreferrer">
                            <FaGithub className="text-xl md:mr-2" />
                            <span className="sr-only md:not-sr-only">TODO i18n text</span>
                          </a>
                        </Button>
                      )}
                      {active.gitlab && (
                        <Button className="bg-orange-700 hover:bg-orange-800" size="sm" asChild>
                          <a href={active.github} target="_blank" rel="noreferrer">
                            <FaGitlab className="text-xl md:mr-2" />
                            <span className="sr-only md:not-sr-only">TODO i18n text</span>
                          </a>
                        </Button>
                      )}
                      {active.link && (
                        <Button size="sm" asChild>
                          <a href={active.link} target="_blank" rel="noreferrer">
                            <FaExternalLinkAlt className="text-xl md:mr-2" />
                            <span className="sr-only md:not-sr-only">TODO i18n text</span>
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
                      {typeof active.content === "function" ? active.content() : active.content}
                    </motion.div>
                    <ul className="flex w-max gap-2 md:ml-auto">
                      {active.stackIcons.map((icon, index) => (
                        <li key={index}>{icon}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </ShineBorder>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>

      {/* ? ---------------------------------------------- Cards list ----------------------------------------------- */}
      <ul className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {projects.map((card, index) => (
          <motion.li
            key={index}
            layoutId={`card-${card.title}-${id}`}
            onClick={() => setActive(card)}
            className="flex cursor-pointer flex-col rounded-md shadow-md shadow-secondary hover:bg-neutral-200 dark:hover:bg-neutral-800"
          >
            <ShineBorder
              key={index}
              borderRadius={5}
              borderWidth={2}
              color={["#8D27FF", "#B40A74"]}
              className="p-2 md:p-4"
            >
              <motion.div layoutId={`image-${card.title}-${id}`}>
                <Image
                  width={600}
                  height={100}
                  src={card.src}
                  draggable="false"
                  alt=""
                  className="mb-4 h-60 w-full select-none rounded object-cover object-top"
                />
              </motion.div>
              <motion.h3
                layoutId={`title-${card.title}-${id}`}
                className="text-center text-base font-medium text-neutral-800 dark:text-neutral-200 md:text-left"
              >
                {card.title}
              </motion.h3>
            </ShineBorder>
          </motion.li>
        ))}
      </ul>
    </>
  )
}
