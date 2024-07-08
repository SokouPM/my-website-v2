interface LangInterface {
  value: string
  label: {
    flag: string
    text: string
  }
}

export const langs: LangInterface[] = [
  { value: "en", label: { flag: "🇺🇸", text: "English" } },
  { value: "fr", label: { flag: "🇫🇷", text: "Français" } },
]
