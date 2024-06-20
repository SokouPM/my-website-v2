import { cn } from "@/lib/utils"

export default function RetroGrid({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "pointer-events-none absolute mt-auto h-full w-full self-end overflow-hidden [perspective:50px]",
        className,
      )}
    >
      {/* Grid */}
      <div className="absolute inset-0 [transform:rotateX(35deg)]">
        <div
          className={cn(
            "animate-grid",

            "[background-repeat:repeat] [background-size:60px_60px] [height:300vh] [margin-left:-100%] [transform-origin:100%_0_0] [width:600vw]",
            // Light Styles
            "[background-image:linear-gradient(to_right,rgba(141,39,255,1)_1px,transparent_0),linear-gradient(to_bottom,rgba(180,10,116,1)_1px,transparent_0)]",
            // Dark styles
            "dark:[background-image:linear-gradient(to_right,rgba(141,39,255,1)_2px,transparent_0),linear-gradient(to_bottom,rgba(180,10,116,1)_2px,transparent_0)]",
          )}
        />
      </div>

      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-background to-20%" />
      <div className="absolute inset-0 top-[39%] bg-gradient-to-b from-background to-20% md:top-[40%]" />
    </div>
  )
}
