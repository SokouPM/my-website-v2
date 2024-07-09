"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { clsx } from "clsx"
import { useTranslations } from "next-intl"
import { ReactElement } from "react"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function ContactForm(): ReactElement {
  const t = useTranslations("pages.contact.form")

  const contactFormSchema = z.object({
    firstName: z.string().min(1, t("firstname.errors.min")).max(100, t("firstname.errors.max")),
    lastName: z.string().min(1, t("lastname.errors.min")).max(100, t("lastname.errors.max")),
    email: z.string().min(1, t("email.errors.min")).max(100, t("email.errors.max")).email(t("email.errors.email")),
    subject: z.string().min(1, t("subject.errors.min")).max(100, t("subject.errors.max")),
    message: z.string().min(10, t("message.errors.min")).max(500, t("message.errors.max")),
  })

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

  function onSubmit(values: z.infer<typeof contactFormSchema>) {
    alert(JSON.stringify(values, null, 2))
  }

  return (
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

        <Button className="w-full" type="submit">
          {t("submit")}
        </Button>
      </form>
    </Form>
  )
}
