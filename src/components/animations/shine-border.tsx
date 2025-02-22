"use client"

import { cn } from "@/lib/utils"
import { CSSProperties, ReactElement, ReactNode } from "react"

type TColorProp = `#${string}` | `#${string}`[]

interface ShineBorderProps {
  borderRadius?: number
  borderWidth?: number
  duration?: number
  color?: TColorProp
  className?: string
  children: ReactNode
}

/**
 * @name Shine Border
 * @description It is an animated background border effect component with easy to use and configurable props.
 * @param borderRadius defines the radius of the border.
 * @param borderWidth defines the width of the border.
 * @param duration defines the animation duration to be applied on the shining border
 * @param color a string or string array to define border color.
 * @param className defines the class name to be applied to the component
 * @param children contains react node elements.
 */
export default function ShineBorder({
  borderRadius = 8,
  borderWidth = 1,
  duration = 14,
  color = "#fff",
  className,
  children,
}: ShineBorderProps): ReactElement {
  return (
    <div
      style={
        {
          "--border-radius": `${borderRadius}px`,
        } as CSSProperties
      }
      className={cn("relative min-h-[60px] rounded-[--border-radius]", className)}
    >
      <div
        style={
          {
            "--border-width": `${borderWidth}px`,
            "--border-radius": `${borderRadius}px`,
            "--border-radius-child": `${borderRadius * 0.2}px`,
            "--shine-pulse-duration": `${duration}s`,
            "--mask-linear-gradient": `linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)`,
            "--background-radial-gradient": `radial-gradient(transparent,transparent, ${!(color instanceof Array) ? color : color.join(",")},transparent,transparent)`,
          } as CSSProperties
        }
        className={`before:![-webkit-mask-composite:xor] before:![mask-composite:exclude] before:absolute before:inset-[0] before:aspect-square before:h-full before:w-full before:rounded-[--border-radius] before:bg-shine-size before:p-[--border-width] before:will-change-[background-position] before:content-[""] motion-safe:before:animate-[shine-pulse_var(--shine-pulse-duration)_infinite_linear] before:[background-image:var(--background-radial-gradient)] before:[background-size:300%_300%] before:[mask:var(--mask-linear-gradient)]`}
      ></div>
      <div className={"z-[1] size-full rounded-[--border-radius-child]"}>{children}</div>
    </div>
  )
}
