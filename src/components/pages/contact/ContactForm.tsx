"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { clsx } from "clsx"
import { useTranslations } from "next-intl"
import { ReactElement } from "react"
import { useForm } from "react-hook-form"
import { IoAlertCircleOutline, IoCheckmarkCircleOutline } from "react-icons/io5"
import { useMutation } from "react-query"
import { z } from "zod"

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { ContactFormSchema } from "@/schemas/ContactFormSchema"

const EmailFormDialog = ({
  isError,
  isSuccess,
  reset,
}: {
  isError: boolean
  isSuccess: boolean
  reset: () => void
}): ReactElement => {
  const t = useTranslations("pages.contact.dialog")

  return (
    <AlertDialog open={isError || isSuccess} onOpenChange={() => {}}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>{isError ? t("title.error") : isSuccess && t("title.success")}</AlertDialogTitle>
          <AlertDialogDescription className="flex items-center justify-center gap-4">
            {isError ? (
              <IoAlertCircleOutline size={80} className="text-destructive" />
            ) : (
              isSuccess && <IoCheckmarkCircleOutline size={80} color="green" />
            )}
            <span className="flex-1">{isError ? t("content.error") : isSuccess && t("content.success")}</span>
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogAction
            onClick={() => {
              reset()
            }}
          >
            Fermer
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}

export default function ContactForm(): ReactElement {
  const t = useTranslations("pages.contact.form")

  const contactFormSchema = ContactFormSchema(t)

  const form = useForm<z.infer<typeof contactFormSchema>>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      subject: "",
      message: "",
    },
  })

  const sendData = async (data: z.infer<typeof contactFormSchema>): Promise<void> => {
    const response = await fetch("/api/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })

    if (!response.ok) {
      throw new Error(response.statusText)
    }

    return response.json()
  }

  const { mutate, isError, isLoading, isSuccess, reset } = useMutation(sendData, {
    onSuccess: () => {
      form.reset()
    },
  })

  const onSubmit = (values: z.infer<typeof contactFormSchema>): void => {
    mutate(values)
  }

  return (
    <>
      <EmailFormDialog isError={isError} isSuccess={isSuccess} reset={reset} />
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="mx-auto md:w-10/12">
          <div className="flex flex-col md:flex-row md:gap-4">
            <FormField
              control={form.control}
              name="firstName"
              render={({ field, fieldState }) => (
                <FormItem className="mb-5 w-full">
                  <FormLabel className="text-lg">{t("firstname.label")}</FormLabel>
                  <FormControl>
                    <Input
                      placeholder={t("firstname.placeholder")}
                      className={clsx({ "error-field border-2 border-red-500": fieldState.error })}
                      {...field}
                    />
                  </FormControl>
                  <FormDescription className="sr-only">{t("firstname.description")}</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="lastName"
              render={({ field, fieldState }) => (
                <FormItem className="mb-5 w-full">
                  <FormLabel className="text-lg">{t("lastname.label")}</FormLabel>
                  <FormControl>
                    <Input
                      placeholder={t("lastname.placeholder")}
                      className={clsx({ "error-field border-2 border-red-500": fieldState.error })}
                      {...field}
                    />
                  </FormControl>
                  <FormDescription className="sr-only">{t("lastname.description")}</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="flex flex-col md:flex-row md:gap-4">
            <FormField
              control={form.control}
              name="email"
              render={({ field, fieldState }) => (
                <FormItem className="mb-5 w-full">
                  <FormLabel className="text-lg">{t("email.label")}</FormLabel>
                  <FormControl>
                    <Input
                      type="email"
                      autoComplete={t("email.label")}
                      placeholder={t("email.placeholder")}
                      className={clsx({ "error-field border-2 border-red-500": fieldState.error })}
                      {...field}
                    />
                  </FormControl>
                  <FormDescription className="sr-only">{t("email.description")}</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="subject"
              render={({ field, fieldState }) => (
                <FormItem className="mb-5 w-full">
                  <FormLabel className="text-lg">{t("subject.label")}</FormLabel>
                  <FormControl>
                    <Input
                      placeholder={t("subject.placeholder")}
                      className={clsx({ "error-field border-2 border-red-500": fieldState.error })}
                      {...field}
                    />
                  </FormControl>
                  <FormDescription className="sr-only">{t("subject.description")}</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <FormField
            control={form.control}
            name="message"
            render={({ field, fieldState }) => (
              <FormItem className="mb-5 w-full">
                <FormLabel className="text-lg">{t("message.label")}</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder={t("message.placeholder")}
                    className={clsx({ "error-field border-2 border-red-500": fieldState.error })}
                    rows={8}
                    {...field}
                  />
                </FormControl>
                <FormDescription className="sr-only">{t("message.description")}</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          {isLoading ? (
            <Button className="w-full cursor-progress" aria-label={t("submit")} disabled>
              {t("submit")}
            </Button>
          ) : (
            <Button className="w-full" type="submit" aria-label={t("submit")}>
              {t("submit")}
            </Button>
          )}
        </form>
      </Form>
    </>
  )
}
