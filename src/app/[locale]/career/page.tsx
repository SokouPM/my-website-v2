import { ReactElement } from "react"

import PageTitle from "@/components/PageTitle"

export default function AboutMe(): ReactElement {
  return (
    <main className="mx-auto w-11/12 flex-1 flex-col lg:w-10/12 xl:w-8/12">
      <PageTitle />
    </main>
  )
}
