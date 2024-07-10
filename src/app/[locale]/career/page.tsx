import { getTranslations } from "next-intl/server"
import { ReactElement } from "react"

import TimeLine from "@/components/pages/career/TimeLine"
import PageTitle from "@/components/PageTitle"

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }): Promise<{
  title: string
}> {
  const t = await getTranslations({ locale, namespace: ["metadata"] })

  return {
    title: t("title.career"),
  }
}

const TODO: boolean = true

export default function AboutMe(): ReactElement {
  return (
    <main className="main-container flex-1 flex-col">
      <PageTitle />
      {TODO ? <p className="text-center text-5xl italic">🏗️ In progress</p> : <TimeLine />}
    </main>
  )
}
