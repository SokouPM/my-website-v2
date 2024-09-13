import { constants as httpConstants } from "http2"

import { getTranslations } from "next-intl/server"
import { NextRequest, NextResponse } from "next/server"
import { ReactElement } from "react"
import { Resend } from "resend"
import { ZodError } from "zod"

import { ContactFormSchema } from "@/schemas/ContactFormSchema"

import Email from "../../../../emails"

const resend = new Resend(process.env.RESEND_API_KEY)

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
      from: "contact@pierre-marquet.fr",
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
      const statusCode = resendError.statusCode || httpConstants.HTTP_STATUS_INTERNAL_SERVER_ERROR

      return NextResponse.json(error, { status: statusCode })
    }

    return NextResponse.json({ message: "Email send successfully" }, { status: httpConstants.HTTP_STATUS_OK })
  } catch (error) {
    if (error instanceof ZodError) {
      return NextResponse.json({ error: error.errors }, { status: httpConstants.HTTP_STATUS_BAD_REQUEST })
    }

    return NextResponse.json({ error }, { status: httpConstants.HTTP_STATUS_INTERNAL_SERVER_ERROR })
  }
}
