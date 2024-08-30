import { motion } from "framer-motion"
import React, { ReactElement } from "react"

import { cn } from "@/lib/utils"

export const BackgroundGradient = ({
  children,
  className,
  containerClassName,
  gradientClassName,
  animate = true,
}: {
  children?: React.ReactNode
  className?: string
  containerClassName?: string
  gradientClassName?: string
  animate?: boolean
}): ReactElement => {
  const variants = {
    initial: {
      backgroundPosition: "0 50%",
    },
    animate: {
      backgroundPosition: ["0, 50%", "100% 50%", "0 50%"],
    },
  }

  return (
    <div className={cn("group relative p-[4px]", containerClassName)}>
      <motion.div
        variants={animate ? variants : undefined}
        initial={animate ? "initial" : undefined}
        animate={animate ? "animate" : undefined}
        transition={
          animate
            ? {
                duration: 5,
                repeat: Infinity,
                repeatType: "reverse",
              }
            : undefined
        }
        style={{
          backgroundSize: animate ? "400% 400%" : undefined,
        }}
        className={cn(
          "absolute inset-0 opacity-100 blur transition duration-500 will-change-transform group-hover:opacity-100",
          "bg-[radial-gradient(circle_farthest-side_at_0_100%,#B40A74,transparent),radial-gradient(circle_farthest-side_at_100%_0,#7b61ff,transparent),radial-gradient(circle_farthest-side_at_100%_100%,#8D27FF,transparent),radial-gradient(circle_farthest-side_at_0_0,#8D27FF,#141316)]",
          gradientClassName,
        )}
      />
      <motion.div
        variants={animate ? variants : undefined}
        initial={animate ? "initial" : undefined}
        animate={animate ? "animate" : undefined}
        transition={
          animate
            ? {
                duration: 5,
                repeat: Infinity,
                repeatType: "reverse",
              }
            : undefined
        }
        style={{
          backgroundSize: animate ? "400% 400%" : undefined,
        }}
        className={cn(
          "absolute inset-0 z-[1] will-change-transform",
          "bg-[radial-gradient(circle_farthest-side_at_0_100%,#B40A74,transparent),radial-gradient(circle_farthest-side_at_100%_0,#7b61ff,transparent),radial-gradient(circle_farthest-side_at_100%_100%,#8D27FF,transparent),radial-gradient(circle_farthest-side_at_0_0,#8D27FF,#141316)]",
        )}
      />

      <div className={cn("relative z-10", className)}>{children}</div>
    </div>
  )
}
