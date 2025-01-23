import * as React from "react"
import { ForwardedRef, HTMLAttributes, ReactElement, forwardRef } from "react"

import { cn } from "@/lib/utils"

const Card = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }: HTMLAttributes<HTMLDivElement>, ref: ForwardedRef<HTMLDivElement>): ReactElement => (
    <div ref={ref} className={cn("border bg-card text-card-foreground shadow-sm", className)} {...props} />
  ),
)
Card.displayName = "Card"

const CardHeader = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }: HTMLAttributes<HTMLDivElement>, ref: ForwardedRef<HTMLDivElement>): ReactElement => (
    <div ref={ref} className={cn("", className)} {...props} />
  ),
)
CardHeader.displayName = "CardHeader"

const CardTitle = forwardRef<HTMLParagraphElement, HTMLAttributes<HTMLHeadingElement>>(
  (
    { className, ...props }: HTMLAttributes<HTMLHeadingElement>,
    ref: ForwardedRef<HTMLHeadingElement>,
  ): ReactElement => <h3 ref={ref} className={cn("", className)} {...props} />,
)
CardTitle.displayName = "CardTitle"

const CardDescription = forwardRef<HTMLParagraphElement, HTMLAttributes<HTMLParagraphElement>>(
  (
    { className, ...props }: HTMLAttributes<HTMLParagraphElement>,
    ref: ForwardedRef<HTMLParagraphElement>,
  ): ReactElement => <p ref={ref} className={cn("", className)} {...props} />,
)
CardDescription.displayName = "CardDescription"

const CardContent = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }: HTMLAttributes<HTMLDivElement>, ref: ForwardedRef<HTMLDivElement>): ReactElement => (
    <div ref={ref} className={cn("", className)} {...props} />
  ),
)
CardContent.displayName = "CardContent"

const CardFooter = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }: HTMLAttributes<HTMLDivElement>, ref): ReactElement => (
    <div ref={ref} className={cn("", className)} {...props} />
  ),
)
CardFooter.displayName = "CardFooter"

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent }
