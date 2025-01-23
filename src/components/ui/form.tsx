"use client"

import * as LabelPrimitive from "@radix-ui/react-label"
import { Slot } from "@radix-ui/react-slot"
import {
  ComponentPropsWithoutRef,
  Context,
  ElementRef,
  ForwardedRef,
  HTMLAttributes,
  ReactElement,
  ReactNode,
  createContext,
  forwardRef,
  useContext,
  useId,
} from "react"
import {
  Controller,
  ControllerProps,
  FieldError,
  FieldPath,
  FieldValues,
  FormProvider,
  useFormContext,
} from "react-hook-form"

import { Label } from "@/components/ui/label"
import { cn } from "@/lib/utils"

const Form = FormProvider

type FormFieldContextValue<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> = {
  name: TName
}

const FormFieldContext = createContext<FormFieldContextValue>({} as FormFieldContextValue)

const FormField = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>({
  ...props
}: ControllerProps<TFieldValues, TName>): ReactElement => {
  return (
    <FormFieldContext.Provider value={{ name: props.name }}>
      <Controller {...props} />
    </FormFieldContext.Provider>
  )
}

const useFormField = (): {
  invalid: boolean
  isDirty: boolean
  isTouched: boolean
  isValidating: boolean
  error?: FieldError | undefined
  id: string
  name: string
  formItemId: string
  formDescriptionId: string
  formMessageId: string
} => {
  const fieldContext = useContext(FormFieldContext)
  const itemContext: FormItemContextValue = useContext(FormItemContext)
  const { getFieldState, formState } = useFormContext()

  const fieldState = getFieldState(fieldContext.name, formState)

  if (!fieldContext) {
    throw new Error("useFormField should be used within <FormField>")
  }

  const { id } = itemContext

  return {
    id,
    name: fieldContext.name,
    formItemId: `${id}-form-item`,
    formDescriptionId: `${id}-form-item-description`,
    formMessageId: `${id}-form-item-message`,
    ...fieldState,
  }
}

type FormItemContextValue = {
  id: string
}

const FormItemContext: Context<FormItemContextValue> = createContext<FormItemContextValue>({} as FormItemContextValue)

const FormItem = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }: HTMLAttributes<HTMLDivElement>, ref: ForwardedRef<HTMLDivElement>): ReactElement => {
    const id: string = useId()

    return (
      <FormItemContext.Provider value={{ id }}>
        <div ref={ref} className={cn("space-y-2", className)} {...props} />
      </FormItemContext.Provider>
    )
  },
)
FormItem.displayName = "FormItem"

const FormLabel = forwardRef<
  ElementRef<typeof LabelPrimitive.Root>,
  ComponentPropsWithoutRef<typeof LabelPrimitive.Root>
>(({ className, ...props }, ref: ForwardedRef<HTMLLabelElement>): ReactElement => {
  const { error, formItemId } = useFormField()

  return <Label ref={ref} className={cn(error && "text-destructive", className)} htmlFor={formItemId} {...props} />
})
FormLabel.displayName = "FormLabel"

const FormControl = forwardRef<ElementRef<typeof Slot>, ComponentPropsWithoutRef<typeof Slot>>(
  ({ ...props }, ref: ForwardedRef<HTMLElement>): ReactElement => {
    const { error, formItemId, formDescriptionId, formMessageId } = useFormField()

    return (
      <Slot
        ref={ref}
        id={formItemId}
        aria-describedby={!error ? `${formDescriptionId}` : `${formDescriptionId} ${formMessageId}`}
        aria-invalid={!!error}
        {...props}
      />
    )
  },
)
FormControl.displayName = "FormControl"

const FormDescription = forwardRef<HTMLParagraphElement, HTMLAttributes<HTMLParagraphElement>>(
  (
    { className, ...props }: HTMLAttributes<HTMLParagraphElement>,
    ref: ForwardedRef<HTMLParagraphElement>,
  ): ReactElement => {
    const { formDescriptionId } = useFormField()

    return <p ref={ref} id={formDescriptionId} className={cn("text-muted-foreground text-sm", className)} {...props} />
  },
)
FormDescription.displayName = "FormDescription"

const FormMessage = forwardRef<HTMLParagraphElement, HTMLAttributes<HTMLParagraphElement>>(
  (
    { className, children, ...props }: HTMLAttributes<HTMLParagraphElement>,
    ref: ForwardedRef<HTMLParagraphElement>,
  ): ReactElement | null => {
    const { error, formMessageId } = useFormField()
    const body: ReactNode = error ? String(error?.message) : children

    if (!body) {
      return null
    }

    return (
      <p ref={ref} id={formMessageId} className={cn("font-medium text-destructive text-sm", className)} {...props}>
        {body}
      </p>
    )
  },
)
FormMessage.displayName = "FormMessage"

export { useFormField, Form, FormItem, FormLabel, FormControl, FormDescription, FormMessage, FormField }
