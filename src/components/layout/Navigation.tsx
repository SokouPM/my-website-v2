import Link from "next/link"

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { menu } from "@/config/menu"

export default function Navigation() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        {menu.map((item, index) => {
          return (
            <NavigationMenuItem key={index}>
              {item.href && (
                <Link href={item.href} legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>{item.name}</NavigationMenuLink>
                </Link>
              )}
              {item.children ? (
                <>
                  <NavigationMenuTrigger>{item.name}</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul>
                      {item.children.map((child, index) => {
                        return (
                          <li key={index}>
                            {child.href && (
                              <Link href={child.href} legacyBehavior passHref className="w-full">
                                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                  {child.name}
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
