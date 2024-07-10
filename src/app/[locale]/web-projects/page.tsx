import { getTranslations } from "next-intl/server"
import { ReactElement } from "react"

import PageTitle from "@/components/PageTitle"

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
    </main>
  )
}
