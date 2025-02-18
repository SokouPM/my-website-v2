"use client"

import { useTranslations } from "next-intl"
import Link from "next/link"
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
import navMenu from "@/data/NavMenu"
import NavMenuItemInterface from "@/interfaces/navMenu"
import { usePathname } from "next/navigation"

const RenderNavItem = ({ navItem, locale }: { navItem: NavMenuItemInterface; locale: string }): ReactElement | null => {
  const t = useTranslations("header.navbar")
  const pathname: string = usePathname()

  if (navItem.href) {
    return (
      <SheetClose asChild>
        <Button variant="ghost" asChild={true}>
          <Link
            className="w-full py-8 text-xl"
            href={`/${locale}${navItem.href}`}
            aria-current={`/${locale}${navItem.href}` === pathname ? "page" : undefined}
          >
            {t(navItem.name)}
          </Link>
        </Button>
      </SheetClose>
    )
  }

  return null
}

export default function MobileNav({ locale }: { locale: string }): ReactElement {
  const t = useTranslations("header.navbar")

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" aria-label={t("open-menu")}>
          <LuMenu className="size-4" />
          <span className="sr-only">{t("open-menu")}</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="top" customCloseButton={true} className="w-full">
        <SheetHeader className="mb-14">
          <SheetClose className="absolute top-3 left-3" asChild>
            <Button variant="outline" size="icon" aria-label={t("close-menu")}>
              <LuX className="size-4" />
              <span className="sr-only">{t("close-menu")}</span>
            </Button>
          </SheetClose>
          <SheetTitle className="absolute top-0 right-0">
            <Logo locale={locale} />
          </SheetTitle>
          <SheetDescription></SheetDescription>
        </SheetHeader>
        <ul>
          {navMenu.map(
            (item: NavMenuItemInterface, index: number): ReactElement => (
              <li key={index}>
                {item.href && <RenderNavItem navItem={item} locale={locale} />}
                {item.children && (
                  <ul>
                    {item.children.map(
                      (child: NavMenuItemInterface, childIndex: number): ReactElement => (
                        <li key={childIndex}>
                          <RenderNavItem navItem={child} locale={locale} />
                        </li>
                      ),
                    )}
                  </ul>
                )}
              </li>
            ),
          )}
        </ul>
      </SheetContent>
    </Sheet>
  )
}
