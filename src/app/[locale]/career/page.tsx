import { getTranslations } from "next-intl/server"
import { ReactElement } from "react"

import PageTitle from "@/components/PageTitle"
import TimeLine from "@/components/body/career/TimeLine"

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }): Promise<{
  title: string
}> {
  const t = await getTranslations({ locale, namespace: ["metadata"] })

  return {
    title: t("title.career"),
  }
}

export default function AboutMe(): ReactElement {
  return (
    <main className="main-container flex-1 flex-col">
      <PageTitle />
      <TimeLine />
    </main>
  )
}
