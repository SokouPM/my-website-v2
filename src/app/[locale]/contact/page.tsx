import { getTranslations } from "next-intl/server"
import { ReactElement } from "react"

import PageTitle from "@/components/PageTitle"
import ContactForm from "@/components/body/contact/ContactForm"
import { QueryProvider } from "@/components/provider/query-provider"

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }): Promise<{
  title: string
}> {
  const t = await getTranslations({ locale, namespace: ["metadata"] })

  return {
    title: t("title.contact"),
  }
}

export default function AboutMe(): ReactElement {
  return (
    <QueryProvider>
      <main className="main-container flex-1 flex-col">
        <PageTitle />
        <ContactForm />
      </main>
    </QueryProvider>
  )
}
