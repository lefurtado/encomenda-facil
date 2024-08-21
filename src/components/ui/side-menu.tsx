import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { paths } from "@/paths";
import { NavItem } from "../ui/nav-item";

export function SideMenu() {
  const navItems = paths;

  return (
    <nav className="hidden w-72 h-screen sm:block fixed bg-slate-950 p-3">
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
    </nav>
  );
}
