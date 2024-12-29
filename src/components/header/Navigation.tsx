import { useTranslations } from "next-intl"
import Link from "next/link"
import { ReactElement } from "react"

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { menu } from "@/interfaces/menu"
import { usePathname } from "next/navigation"

export default function Navigation({ locale }: { locale: string }): ReactElement {
  const t = useTranslations("header.navbar")
  const pathname = usePathname()

  return (
    <NavigationMenu>
      <NavigationMenuList>
        {menu.map((item, index) => {
          return (
            <NavigationMenuItem key={index}>
              {item.href && (
                <Link href={`/${locale}${item.href}`} legacyBehavior passHref>
                  <NavigationMenuLink
                    className={navigationMenuTriggerStyle()}
                    aria-current={`/${locale}${item.href}` === pathname ? "page" : undefined}
                  >
                    {t(item.name)}
                  </NavigationMenuLink>
                </Link>
              )}
              {item.children ? (
                <>
                  <NavigationMenuTrigger>{t(item.name)}</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul>
                      {item.children.map((child, index) => {
                        return (
                          <li key={index}>
                            {child.href && (
                              <Link href={`/${locale}${child.href}`} legacyBehavior passHref className="w-full">
                                <NavigationMenuLink
                                  className={navigationMenuTriggerStyle()}
                                  aria-current={`/${locale}${child.href}` === pathname ? "page" : undefined}
                                >
                                  {t(child.name)}
                                </NavigationMenuLink>
                              </Link>
                            )}
                          </li>
                        )
                      })}
                    </ul>
                  </NavigationMenuContent>
                </>
              ) : null}
            </NavigationMenuItem>
          )
        })}
      </NavigationMenuList>
    </NavigationMenu>
  )
}
