"use client"

import { Variants, motion } from "framer-motion"
import { ReactElement } from "react"

import { cn } from "@/lib/utils"

interface WordFadeInProps {
  words: string
  className?: string
  delay?: number
  variants?: Variants
}

export default function WordFadeIn({
  words,
  delay = 0.15,
  variants = {
    hidden: { opacity: 0 },
    visible: (
      i: number,
    ): {
      y: number
      opacity: number
      transition: { delay: number }
    } => ({
      y: 0,
      opacity: 1,
      transition: { delay: i * delay },
    }),
  },
  className,
}: WordFadeInProps): ReactElement {
  const _words = words.split(" ")

  return (
    <motion.h1
      variants={variants}
      initial="hidden"
      animate="visible"
      className={cn("font-display text-black dark:text-white", className)}
    >
      {_words.map((word, i) => (
        <motion.span key={word} variants={variants} custom={i}>
          {word}{" "}
        </motion.span>
      ))}
    </motion.h1>
  )
}
