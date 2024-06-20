"use client"

import { AnimatePresence, HTMLMotionProps, motion } from "framer-motion"
import { useEffect, useState } from "react"

import { cn } from "@/lib/utils"

interface WordRotateProps {
  words: string[]
  duration?: number
  framerProps?: HTMLMotionProps<"h3">
  className?: string
}

export default function WordRotate({
  words,
  duration = 2500,
  framerProps = {
    initial: { opacity: 0, y: -50 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 50 },
    transition: { duration: 0.25, ease: "easeOut" },
  },
  className,
}: WordRotateProps) {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length)
    }, duration)

    // Clean up interval on unmount
    return () => clearInterval(interval)
  }, [words, duration])

  return (
    <AnimatePresence mode="wait">
      <motion.h3 key={words[index]} className={cn(className)} {...framerProps}>
        {words[index]}
      </motion.h3>
    </AnimatePresence>
  )
}
