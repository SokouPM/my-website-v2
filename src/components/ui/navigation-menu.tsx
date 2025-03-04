import * as NavigationMenuPrimitive from "@radix-ui/react-navigation-menu"
import { cva } from "class-variance-authority"
import { ComponentPropsWithoutRef, ElementRef, ForwardedRef, ReactElement, forwardRef } from "react"
import { LuChevronDown } from "react-icons/lu"

import { cn } from "@/lib/utils"

/*************************************************** NavigationMenu ***************************************************/
const NavigationMenu = forwardRef<
  ElementRef<typeof NavigationMenuPrimitive.Root>,
  ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Root>
>(
  ({ className, children, ...props }, ref: ForwardedRef<HTMLElement>): ReactElement => (
    <NavigationMenuPrimitive.Root
      ref={ref}
      className={cn("relative z-10 flex max-w-max flex-1 items-center justify-center", className)}
      {...props}
    >
      {children}
      {/*<NavigationMenuViewport />*/}
    </NavigationMenuPrimitive.Root>
  ),
)
NavigationMenu.displayName = NavigationMenuPrimitive.Root.displayName
/*!************************************************* NavigationMenu ***************************************************/

const NavigationMenuList = forwardRef<
  ElementRef<typeof NavigationMenuPrimitive.List>,
  ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.List>
>(
  ({ className, ...props }, ref: ForwardedRef<HTMLUListElement>): ReactElement => (
    <NavigationMenuPrimitive.List
      ref={ref}
      className={cn("group flex flex-1 list-none items-center justify-center space-x-1", className)}
      {...props}
    />
  ),
)
NavigationMenuList.displayName = NavigationMenuPrimitive.List.displayName

/************************************************* NavigationMenuItem *************************************************/
/* const NavigationMenuItem = NavigationMenuPrimitive.Item */

const NavigationMenuItem = forwardRef<
  ElementRef<typeof NavigationMenuPrimitive.Item>,
  ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Item>
>(
  ({ className, ...props }, ref: ForwardedRef<HTMLLIElement>): ReactElement => (
    <NavigationMenuPrimitive.Item ref={ref} className={cn("relative", className)} {...props} />
  ),
)
NavigationMenuItem.displayName = "NavigationMenuItem"
/*!************************************************ NavigationMenuItem *************************************************/

const navigationMenuTriggerStyle = cva(
  "other-diagonal-sides group inline-flex h-10 w-full min-w-max items-center justify-center bg-background px-4 py-2 font-medium text-sm transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50",
)

const NavigationMenuTrigger = forwardRef<
  ElementRef<typeof NavigationMenuPrimitive.Trigger>,
  ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Trigger>
>(
  ({ className, children, ...props }, ref: ForwardedRef<HTMLButtonElement>): ReactElement => (
    <NavigationMenuPrimitive.Trigger
      ref={ref}
      className={cn(navigationMenuTriggerStyle(), "group", className)}
      {...props}
    >
      {children}{" "}
      <LuChevronDown
        className="relative top-px ml-1 size-3 transition duration-200 group-data-[state=open]:rotate-180"
        aria-hidden="true"
      />
    </NavigationMenuPrimitive.Trigger>
  ),
)
NavigationMenuTrigger.displayName = NavigationMenuPrimitive.Trigger.displayName

/************************************************ NavigationMenuContent ***********************************************/
/*
  const NavigationMenuContent = forwardRef<
    ElementRef<typeof NavigationMenuPrimitive.Content>,
    ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Content>
  >(({ className, ...props }, ref) => (
    <NavigationMenuPrimitive.Content
      ref={ref}
      className={cn(
        "left-0 top-0 w-full data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 md:absolute md:w-auto",
        className,
      )}
      {...props}
    />
  ))
*/

const NavigationMenuContent = forwardRef<
  ElementRef<typeof NavigationMenuPrimitive.Content>,
  ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Content>
>(
  ({ className, ...props }, ref: ForwardedRef<HTMLDivElement>): ReactElement => (
    <NavigationMenuPrimitive.Content
      ref={ref}
      className={cn(
        "absolute right-0",
        "absolute top-full mt-[5px] w-fit bg-popover",
        "data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out",
        className,
      )}
      {...props}
    />
  ),
)

NavigationMenuContent.displayName = NavigationMenuPrimitive.Content.displayName
/*!********************************************** NavigationMenuContent ***********************************************/

const NavigationMenuLink = NavigationMenuPrimitive.Link

const NavigationMenuViewport = forwardRef<
  ElementRef<typeof NavigationMenuPrimitive.Viewport>,
  ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Viewport>
>(
  ({ className, ...props }, ref: ForwardedRef<HTMLDivElement>): ReactElement => (
    <div className={cn("absolute top-full left-0 flex justify-center")}>
      <NavigationMenuPrimitive.Viewport
        className={cn(
          "data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 relative mt-1.5 h-[var(--radix-navigation-menu-viewport-height)] w-full origin-top-center overflow-hidden border bg-popover text-popover-foreground shadow-lg data-[state=closed]:animate-out data-[state=open]:animate-in md:w-[var(--radix-navigation-menu-viewport-width)]",
          className,
        )}
        ref={ref}
        {...props}
      />
    </div>
  ),
)
NavigationMenuViewport.displayName = NavigationMenuPrimitive.Viewport.displayName

const NavigationMenuIndicator = forwardRef<
  ElementRef<typeof NavigationMenuPrimitive.Indicator>,
  ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Indicator>
>(
  ({ className, ...props }, ref: ForwardedRef<HTMLDivElement>): ReactElement => (
    <NavigationMenuPrimitive.Indicator
      ref={ref}
      className={cn(
        "data-[state=hidden]:fade-out data-[state=visible]:fade-in top-full z-[1] flex h-1.5 items-end justify-center overflow-hidden data-[state=hidden]:animate-out data-[state=visible]:animate-in",
        className,
      )}
      {...props}
    >
      <div className="relative top-[60%] size-2 rotate-45 bg-border shadow-md" />
    </NavigationMenuPrimitive.Indicator>
  ),
)
NavigationMenuIndicator.displayName = NavigationMenuPrimitive.Indicator.displayName

export {
  navigationMenuTriggerStyle,
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuContent,
  NavigationMenuTrigger,
  NavigationMenuLink,
  NavigationMenuIndicator,
  NavigationMenuViewport,
}
