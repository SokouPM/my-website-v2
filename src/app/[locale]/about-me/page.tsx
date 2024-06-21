"use client"

import { ReactElement } from "react"
import Typewriter from "typewriter-effect"

import ShineBorder from "@/components/animations/shine-border"
import PageTitle from "@/components/PageTitle"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

import profile from "/public/images/profile.png"

export default function AboutMe(): ReactElement {
  return (
    <main className="mx-auto w-11/12 flex-1 flex-col lg:w-10/12 xl:w-8/12">
      <PageTitle />
      <section className="flex flex-col-reverse items-center justify-between gap-5 sm:flex-row sm:gap-10">
        <div>
          <h2 className="text-center text-4xl font-bold sm:text-left sm:text-5xl">Pierre Marquet</h2>
          <div className="h-12 content-center md:h-16">
            <Typewriter
              component={"h3"}
              options={{
                autoStart: true,
                strings: ["Développeur web", "Developpeur front-end", "Developpeur back-end", "Designer"],
                cursor: "|",
                cursorClassName: "text-3xl sm:text-4xl typewriterCursor",
                wrapperClassName:
                  "gradient bg-clip-text text-3xl font-semibold text-transparent sm:text-left sm:text-4xl",
                loop: true,
              }}
            />
          </div>
          <p>
            Issu du monde du design, j'ai travaillé cinq ans pour la Gendarmerie Nationale en concevant des parcours
            d'enseignement avec des images et des animations. J'ai ensuite suivi une formation en développement web et
            web mobile, obtenant un Bachelor et un Master en développement web pour devenir plus polyvalent.
          </p>
        </div>
        <ShineBorder borderRadius={1000} borderWidth={10} color={["#8D27FF", "#B40A74"]} className="p-1">
          <Avatar className="size-max bg-gray-200 dark:bg-gray-800">
            <AvatarImage
              src={profile.src}
              alt="Pierre Marquet Développeur web et Designer"
              className="size-52"
              draggable={false}
            />
            <AvatarFallback className="size-52 bg-background text-5xl"></AvatarFallback>
          </Avatar>
        </ShineBorder>
      </section>
    </main>
  )
}
