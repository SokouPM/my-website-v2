import { ReactElement } from "react"

import ShineBorder from "@/components/animations/shine-border"
import WordRotate from "@/components/animations/word-rotate"
import PageTitle from "@/components/PageTitle"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function AboutMe(): ReactElement {
  return (
    <main className="mx-auto w-11/12 flex-1 flex-col lg:w-10/12 xl:w-8/12">
      <PageTitle />
      <section className="flex flex-col-reverse items-center justify-between gap-5 sm:flex-row sm:gap-10">
        <div>
          <h2 className="mb-2 text-center text-4xl font-bold sm:mb-3 sm:text-left sm:text-5xl">Pierre Marquet</h2>
          <WordRotate
            className="gradient pointer-events-none z-10 mb-2 bg-clip-text text-center text-3xl font-semibold tracking-tighter text-transparent sm:mb-3 sm:text-left sm:text-4xl"
            words={["Développeur frontend", "Développeur backend", "Designer"]}
          />
          <p className="text-justify sm:text-left">
            Issu du monde du design, j'ai travaillé cinq ans pour la Gendarmerie Nationale en concevant des parcours
            d'enseignement avec des images et des animations. J'ai ensuite suivi une formation en développement web et
            web mobile, obtenant un Bachelor et un Master en développement web pour devenir plus polyvalent.
          </p>
        </div>
        <ShineBorder borderRadius={1000} borderWidth={10} color={["#8D27FF", "#B40A74"]} className="p-1">
          <Avatar className="size-max bg-gray-200 dark:bg-gray-800">
            <AvatarImage
              src="/profile.png"
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
