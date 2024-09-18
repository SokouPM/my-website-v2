import { useTranslations } from "next-intl"
import Image from "next/image"
import { ReactElement } from "react"

import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import Career from "@/data/Career"
import { CareerInterface } from "@/interfaces/career"

export default function LastExpCards(): ReactElement | null {
  const t = useTranslations("pages.career")

  const lastJob: CareerInterface = Career.filter((job): boolean => job.type === "work")[0]
  const lastInternship: CareerInterface = Career.filter((job): boolean => job.type === "education")[0]
  const imgSize = 75

  if (!lastJob && !lastInternship) return null

  return (
    <div className="mx-auto mb-5 flex flex-col gap-3 md:flex-row lg:w-11/12">
      {lastJob && (
        <Card className="other-diagonal-sides flex w-full flex-col gap-2 border-none bg-gray-300 p-3 md:w-1/2 dark:bg-gray-800">
          <CardHeader className="flex items-center gap-2 border-b pb-3">
            {lastJob.logo?.src && (
              <Image
                src={lastJob.logo?.src}
                alt={t(lastJob.logo?.alt)}
                width={imgSize}
                height={imgSize}
                className="other-diagonal-sides"
              />
            )}
            <CardTitle className="w-full font-bold md:text-lg">{t(lastJob.title)}</CardTitle>
          </CardHeader>
          <CardContent className="md:text-md">{t(lastJob.localisation)}</CardContent>
          <CardFooter className="italic md:text-sm">{t(lastJob.date)}</CardFooter>
        </Card>
      )}

      {lastInternship && (
        <Card className="other-diagonal-sides flex w-full flex-col gap-2 border-none bg-gray-300 p-3 md:w-1/2 dark:bg-gray-800">
          <CardHeader className="flex items-center gap-2 border-b pb-3">
            {lastInternship.logo?.src && (
              <Image
                src={lastInternship.logo?.src}
                alt={t(lastInternship.logo?.alt)}
                width={imgSize}
                height={imgSize}
                className="other-diagonal-sides"
              />
            )}
            <CardTitle className="w-full font-bold md:text-lg">{t(lastInternship.title)}</CardTitle>
          </CardHeader>
          <CardContent className="md:text-md">{t(lastInternship.localisation)}</CardContent>
          <CardFooter className="italic md:text-sm">{t(lastInternship.date)}</CardFooter>
        </Card>
      )}
    </div>
  )
}
