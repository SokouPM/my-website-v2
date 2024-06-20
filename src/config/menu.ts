export interface MenuItem {
  name: string
  href?: string
  children?: MenuItem[]
}

export const menu: MenuItem[] = [
  {
    name: "À propos de moi",
    href: "/about-me",
  },
  {
    name: "Mes projets",
    children: [
      {
        name: "Mes projets de design",
        href: "/design-projects",
      },
      {
        name: "Mes projets de développement",
        href: "/web-projects",
      },
    ],
  },
  {
    name: "Mon parcours",
    href: "/career",
  },
  {
    name: "Contact",
    href: "/contact",
  },
]
