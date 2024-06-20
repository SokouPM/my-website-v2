"use client"

import Link from "next/link"
import * as React from "react"
import { ReactElement } from "react"
import { LuMenu, LuX } from "react-icons/lu"

import { Button } from "@/components/ui/button"
import { Sheet, SheetClose, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { menu, MenuItem } from "@/config/menu"

const RenderNavItem = ({ navItem }: { navItem: MenuItem }) => {
  if (navItem.href) {
    return (
      <Button variant="ghost" asChild>
        <Link className="w-full py-8 text-xl" href={navItem.href}>
          {navItem.name}
        </Link>
      </Button>
    )
  }
}

export default function MobileNav(): ReactElement {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon">
          <LuMenu className="size-4" />
          <span className="sr-only">Ouvrir le menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="top" customCloseButton={true} className="w-full">
        <SheetHeader className="mb-14">
          <SheetClose className="absolute left-3 top-3">
            <Button variant="outline" size="icon">
              <LuX className="size-4" />
              <span className="sr-only">Fermer le menu</span>
            </Button>
          </SheetClose>
          <SheetTitle className="absolute right-3 top-3 text-xl underline">Où souhaitez-vous aller ?</SheetTitle>
        </SheetHeader>
        <ul>
          {menu.map((item, index) => (
            <li key={index}>
              {item.href && <RenderNavItem navItem={item} />}
              {item.children && (
                <ul>
                  {item.children.map((child, childIndex) => (
                    <li key={childIndex}>
                      <RenderNavItem navItem={child} />
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
