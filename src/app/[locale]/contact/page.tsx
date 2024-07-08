import { ReactElement } from "react"

import ContactForm from "@/components/pages/contact/ContactForm"
import PageTitle from "@/components/PageTitle"

export default function AboutMe(): ReactElement {
  return (
    <main className="main-container flex-1 flex-col">
      <PageTitle />
      <ContactForm />
    </main>
  )
}
