"use client"

import Link from "next/link"
import { useTranslations } from "next-intl"
import { ReactElement } from "react"
import { LuMenu, LuX } from "react-icons/lu"

import Logo from "@/components/Logo"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { menu, MenuItemInterface } from "@/config/menu"

const RenderNavItem = ({ navItem, locale }: { navItem: MenuItemInterface; locale: string }): ReactElement | null => {
  const t = useTranslations("header.navbar")

  if (navItem.href) {
    return (
      <Button variant="ghost" asChild={true}>
        <Link className="w-full py-8 text-xl" href={`/${locale}/${navItem.href}`}>
          {t(navItem.name)}
        </Link>
      </Button>
    )
  }

  return null
}

export default function MobileNav({ locale }: { locale: string }): ReactElement {
  const t = useTranslations("header.navbar")

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon">
          <LuMenu className="size-4" />
          <span className="sr-only">{t("close-menu")}</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="top" customCloseButton={true} className="w-full">
        <SheetHeader className="mb-14">
          <SheetClose className="absolute left-3 top-3" asChild>
            <Button variant="outline" size="icon">
              <LuX className="size-4" />
              <span className="sr-only">Fermer le menu</span>
            </Button>
          </SheetClose>
          <SheetTitle className="absolute right-0 top-0">
            <Logo withHomeLink />
          </SheetTitle>
          <SheetDescription></SheetDescription>
        </SheetHeader>
        <ul>
          {menu.map((item, index) => (
            <li key={index}>
              {item.href && <RenderNavItem navItem={item} locale={locale} />}
              {item.children && (
                <ul>
                  {item.children.map((child, childIndex) => (
                    <li key={childIndex}>
                      <RenderNavItem navItem={child} locale={locale} />
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </SheetContent>
    </Sheet>
  )
}
