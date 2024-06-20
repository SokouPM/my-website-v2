import { ReactElement } from "react"

export function TailwindColorIndicator(): ReactElement | null {
  if (process.env.NODE_ENV === "production") return null

  return (
    <div className="fixed bottom-1 right-1 z-50 flex items-center justify-center gap-1">
      <div className="flex size-10 items-center justify-center bg-primary text-white">pri.</div>
      <div className="flex size-10 items-center justify-center bg-secondary text-white">sec.</div>
      <div className="flex size-10 items-center justify-center bg-accent">acc.</div>
      <div className="flex size-10 items-center justify-center bg-destructive text-background">dest.</div>
    </div>
  )
}
