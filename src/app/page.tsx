import { FluidCanvas } from "@/components/Fluid";
import EggLogo from "@/components/logo/egg";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu"

export default function Home() {
  return (
    <div className="w-full h-screen flex items-center justify-center bg-foreground/20">
      {/* <FluidCanvas /> */}
                  <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Item One</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <NavigationMenuLink>ASDQWE</NavigationMenuLink>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Item One</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <NavigationMenuLink>!"§$$%</NavigationMenuLink>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Item One</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <NavigationMenuLink>qweweqqew</NavigationMenuLink>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
      <div className="flex items-center justify-center">
      <EggLogo className="size-80" />
      <h1 className="text-7xl font-extrabold">Eggility</h1>
      </div>
    </div>
  );
}
