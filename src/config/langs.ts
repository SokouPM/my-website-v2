interface LangInterface {
  value: string
  label: {
    flag: string
    text: string
  }
}

export const langs: LangInterface[] = [
  { value: "fr", label: { flag: "🇫🇷", text: "Français" } },
  { value: "en", label: { flag: "🇺🇸", text: "English" } },
]
