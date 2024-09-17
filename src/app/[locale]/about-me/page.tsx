import { useTranslations } from "next-intl"
import { getTranslations } from "next-intl/server"
import { ReactElement } from "react"

import profile from "/public/images/profile.png"

import PageTitle from "@/components/PageTitle"
import ShineBorder from "@/components/animations/shine-border"
import { CardsProjectsList } from "@/components/body/aboutMe/CardsProjectsList"
import LastExpCards from "@/components/body/aboutMe/LastExpCards"
import SkillsList from "@/components/body/aboutMe/SkillsList"
import SocialsLinks from "@/components/body/aboutMe/SocialsLinks"
import TypeWriter from "@/components/body/aboutMe/Typewriter"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { bestWebProjects } from "@/data/WebProjects"

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
      <section className="mb-5">
        <div className="flex flex-col-reverse items-center justify-between gap-5 md:flex-row md:gap-10">
          <div className="flex flex-col justify-between gap-1 md:gap-3">
            <h2 className="text-center font-bold text-4xl md:text-left md:text-5xl">Pierre Marquet</h2>
            <TypeWriter />
            <p>
              {t.rich("bio", {
                strong: (chunks) => <strong>{chunks}</strong>,
              })}
            </p>
          </div>
          <ShineBorder borderRadius={100} borderWidth={10} color={["#8D27FF", "#B40A74"]} className="p-1">
            <Avatar className="size-max bg-gray-200 dark:bg-gray-800">
              <AvatarImage src={profile.src} alt={t("avatar-alt")} className="size-44" draggable={false} />
              <AvatarFallback className="size-44 bg-gray-200 text-5xl dark:bg-gray-800">䷴</AvatarFallback>
            </Avatar>
          </ShineBorder>
        </div>
      </section>
      <section className="mb-5">
        <LastExpCards />
      </section>
      <section className="mb-24">
        <SocialsLinks />
      </section>

      <section className="mb-24">
        <SkillsList />
      </section>
      <section>
        <h2 className="mb-5 text-center font-bold text-3xl md:my-7 md:mb-10 md:text-4xl">{t("best-projects")}</h2>
        <CardsProjectsList projects={bestWebProjects} />
      </section>
    </main>
  )
}
