import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { MenuIcon } from "lucide-react";
import { NavItem } from "../ui/nav-item";
import { paths } from "@/paths";

export function MobileMenu() {
  const navItems = paths;

  return (
    <div className="block sm:hidden">
      <Drawer direction="left">
        <DrawerTrigger className="p-3">
          <MenuIcon />
        </DrawerTrigger>
        <DrawerContent className="w-72 h-full rounded-none bg-black p-3 border-none">
          <div className="flex justify-center items-center text-center gap-1 p-4">
            <Avatar>
              <AvatarImage className="bg-white p-1" src="/next.svg" />
              <AvatarFallback>FN</AvatarFallback>
            </Avatar>
            <h1 className="text-white text-xl">FINANÇAS</h1>
          </div>
          <ul className="text-white flex flex-col gap-2">
            {navItems.map((item) => (
              <NavItem
                icon={<item.icon className="mr-2 h-5 w-5" />}
                name={item.name}
                path={item.path}
                key={item.name}
              />
            ))}
          </ul>
        </DrawerContent>
      </Drawer>
    </div>
  );
}
