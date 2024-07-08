"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { clsx } from "clsx"
import { ReactElement } from "react"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

const contactFormSchema = z.object({
  firstName: z.string().min(1, "Votre prénom est requis.").max(100, "Votre prénom est trop long."),
  lastName: z.string().min(1, "Votre nom est requis.").max(100, "Votre nom est trop long."),
  email: z.string().email("Veuillez entrer une adresse email valide."),
  object: z.string().min(1, "L'objet de votre message est requis.").max(100, "L'objet de votre message est trop long."),
  message: z
    .string()
    .min(10, "Votre message doit contenir au moins 10 caractères.")
    .max(500, "Votre message ne doit pas dépasser 500 caractères."),
})

export default function ContactForm(): ReactElement {
  const form = useForm<z.infer<typeof contactFormSchema>>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      object: "",
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
                <FormLabel className="text-lg">Prénom</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Pierre"
                    className={clsx({ "error-field border-2 border-red-500": fieldState.error })}
                    {...field}
                  />
                </FormControl>
                <FormDescription className="sr-only">Votre prénom.</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="lastName"
            render={({ field, fieldState }) => (
              <FormItem className="mb-5 w-full">
                <FormLabel className="text-lg">Nom</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Marquet"
                    className={clsx({ "error-field border-2 border-red-500": fieldState.error })}
                    {...field}
                  />
                </FormControl>
                <FormDescription className="sr-only">Votre nom.</FormDescription>
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
                <FormLabel className="text-lg">Email</FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    placeholder="your@email.com"
                    className={clsx({ "error-field border-2 border-red-500": fieldState.error })}
                    {...field}
                  />
                </FormControl>
                <FormDescription className="sr-only">Votre adresse email.</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="object"
            render={({ field, fieldState }) => (
              <FormItem className="mb-5 w-full">
                <FormLabel className="text-lg">Objet</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Demande de contact"
                    className={clsx({ "error-field border-2 border-red-500": fieldState.error })}
                    {...field}
                  />
                </FormControl>
                <FormDescription className="sr-only">L'objet de votre message.</FormDescription>
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
              <FormLabel className="text-lg">Message</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Votre message"
                  className={clsx({ "error-field border-2 border-red-500": fieldState.error })}
                  rows={8}
                  {...field}
                />
              </FormControl>
              <FormDescription className="sr-only">Votre message.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button className="w-full" type="submit">
          Envoyer
        </Button>
      </form>
    </Form>
  )
}
