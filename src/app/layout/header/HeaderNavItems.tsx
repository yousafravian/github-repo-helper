import * as React from "react"
import { cn } from "../../shared/utils"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "../../components/NavigationMenu"
import {NavLink} from "react-router-dom";
import {Info, Folder} from "lucide-react";

export function HeaderNavigationMenu() {
  return (
    <NavigationMenu>
      <NavigationMenuList className="gap-2">
        <NavigationMenuItem>
          <NavigationMenuLink asChild className={cn(navigationMenuTriggerStyle(), "glass hover:bg-white/10 transition-all duration-300")}>
            <NavLink 
              to={'/'}
              className={({ isActive }) => cn(
                'flex items-center gap-2 font-medium transition-colors',
                isActive ? 'text-blue-400' : 'text-gray-300 hover:text-white'
              )}
            >
              <Folder className="w-4 h-4" />
              Repositories
            </NavLink>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink asChild className={cn(navigationMenuTriggerStyle(), "glass hover:bg-white/10 transition-all duration-300")}>
            <NavLink 
              to={'/about'}
              className={({ isActive }) => cn(
                'flex items-center gap-2 font-medium transition-colors',
                isActive ? 'text-blue-400' : 'text-gray-300 hover:text-white'
              )}
            >
              <Info className="w-4 h-4" />
              About App
            </NavLink>
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-xl p-4 leading-none no-underline outline-none transition-all duration-300 glass-card hover:bg-white/10 hover:transform hover:scale-105",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none text-white">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-gray-400">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"
