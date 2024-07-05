import { useTranslations } from "next-intl"
import { ReactElement } from "react"

import profile from "/public/images/profile.png"

import SkillsList from "@/components/aboutMe/SkillsList"
import SocialsLinks from "@/components/aboutMe/SocialsLinks"
import TypeWriter from "@/components/aboutMe/Typewriter"
import ShineBorder from "@/components/animations/shine-border"
import PageTitle from "@/components/PageTitle"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function AboutMe(): ReactElement {
  const t = useTranslations("pages.about-me")

  return (
    <main className="main-container flex-1 flex-col">
      <PageTitle />
      <section className="pb-28">
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
      <section>
        <h2 className="mb-10 text-center text-3xl font-bold">{t("skills.title")}</h2>
        <SkillsList />
      </section>
    </main>
  )
}
