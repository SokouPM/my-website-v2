import { z } from "zod"

export const ContactFormSchema = (
  t: (key: string) => string,
): z.ZodObject<{
  firstName: z.ZodString
  lastName: z.ZodString
  email: z.ZodString
  subject: z.ZodString
  message: z.ZodString
}> =>
  z.object({
    firstName: z
      .string()
      .min(1, { message: t("firstname.errors.min") })
      .max(100, { message: t("firstname.errors.max") }),
    lastName: z
      .string()
      .min(1, { message: t("lastname.errors.min") })
      .max(100, { message: t("lastname.errors.max") }),
    email: z
      .string()
      .min(1, { message: t("email.errors.min") })
      .max(100, { message: t("email.errors.max") })
      .email({ message: t("email.errors.type") }),
    subject: z
      .string()
      .min(1, { message: t("subject.errors.min") })
      .max(100, { message: t("subject.errors.max") }),
    message: z
      .string()
      .min(10, { message: t("message.errors.min") })
      .max(500, { message: t("message.errors.max") }),
  })
