export interface MenuItemInterface {
  name: string
  href?: string
  children?: MenuItemInterface[]
}

export const menu: MenuItemInterface[] = [
  {
    name: "about-me.name",
    href: "/about-me",
  },
  {
    name: "projects.name",
    children: [
      // {
      //   name: "projects.children.design-projects",
      //   href: "/design-projects",
      // },
      {
        name: "projects.children.web-projects",
        href: "/web-projects",
      },
    ],
  },
  {
    name: "career.name",
    href: "/career",
  },
  {
    name: "contact.name",
    href: "/contact",
  },
]
