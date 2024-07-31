import { useTranslations } from "next-intl"
import { getTranslations } from "next-intl/server"
import { ReactElement } from "react"

import profile from "/public/images/profile.png"

import ShineBorder from "@/components/animations/shine-border"
import { CardsProjectsList } from "@/components/pages/aboutMe/CardsProjectsList"
import SkillsList from "@/components/pages/aboutMe/SkillsList"
import SocialsLinks from "@/components/pages/aboutMe/SocialsLinks"
import TypeWriter from "@/components/pages/aboutMe/Typewriter"
import PageTitle from "@/components/PageTitle"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import BestProjects from "@/data/BestProject"

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }): Promise<{
  title: string
}> {
  const t = await getTranslations({ locale, namespace: ["metadata"] })

  return {
    title: t("title.about-me"),
  }
}

export default function AboutMe(): ReactElement {
  const t = useTranslations("pages.about-me")

  return (
    <main className="main-container flex-1 flex-col">
      <PageTitle />
      <section className="mb-20">
        <div className="mb-10 flex flex-col-reverse items-center justify-between gap-5 md:flex-row md:gap-10">
          <div>
            <h2 className="text-center text-4xl font-bold md:text-left md:text-5xl">Pierre Marquet</h2>
            <TypeWriter />
            <p>
              {t.rich("bio", {
                strong: (chunks) => <strong>{chunks}</strong>,
              })}
            </p>
          </div>
          <ShineBorder borderRadius={1000} borderWidth={10} color={["#8D27FF", "#B40A74"]} className="p-1">
            <Avatar className="size-max bg-gray-200 dark:bg-gray-800">
              <AvatarImage src={profile.src} alt={t("avatar-alt")} className="size-52" draggable={false} />
              <AvatarFallback className="size-52 bg-gray-200 text-5xl dark:bg-gray-800">䷴</AvatarFallback>
            </Avatar>
          </ShineBorder>
        </div>
        <SocialsLinks />
      </section>
      <section className="mb-32">
        <SkillsList />
      </section>
      <section>
        <h2 className="mb-10 text-center text-4xl font-bold">{t("best-projects")}</h2>
        <CardsProjectsList projects={BestProjects} />
      </section>
    </main>
  )
}
