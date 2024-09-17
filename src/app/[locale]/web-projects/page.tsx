import { getTranslations } from "next-intl/server"
import { ReactElement } from "react"

import PageTitle from "@/components/PageTitle"
import { CardsProjectsList } from "@/components/body/aboutMe/CardsProjectsList"
import { webProjects } from "@/data/WebProjects"

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }): Promise<{
  title: string
}> {
  const t = await getTranslations({ locale, namespace: ["metadata"] })

  return {
    title: t("title.web-projects"),
  }
}

export default function WebProjects(): ReactElement {
  return (
    <main className="main-container flex-1 flex-col">
      <PageTitle />
      <CardsProjectsList projects={webProjects} className="mt-20 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4" />
    </main>
  )
}
