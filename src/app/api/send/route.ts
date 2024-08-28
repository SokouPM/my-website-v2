import { NextRequest, NextResponse } from "next/server"
import { getTranslations } from "next-intl/server"
import { ReactElement } from "react"
import { Resend } from "resend"
import { ZodError } from "zod"

import { ContactFormSchema } from "@/schemas/ContactFormSchema"

import Email from "../../../../emails"

const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY)

interface ResendError {
  statusCode?: number
  message: string
  name: string
}

export async function POST(request: NextRequest): Promise<Response> {
  try {
    const t = await getTranslations({ locale: "en", namespace: "pages.contact.form" })
    const body = await request.json()

    const { firstName, lastName, email, subject, message } = ContactFormSchema(t).parse(body)

    const { error } = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "marquet_pierre@yahoo.fr",
      subject: "Demande de contact depuis le site",
      react: Email({
        firstName,
        lastName,
        email,
        subject,
        message,
      }) as ReactElement,
    })

    if (error) {
      const resendError = error as ResendError
      const statusCode = resendError.statusCode || 500

      return NextResponse.json({ message: error.message }, { status: statusCode })
    }

    return NextResponse.json({ message: "Email send successfully" }, { status: 200 })
  } catch (error) {
    if (error instanceof ZodError) {
      return NextResponse.json({ error: error.errors }, { status: 400 })
    }

    return NextResponse.json({ error }, { status: 500 })
  }
}
