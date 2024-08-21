"use client";

import { usePathname } from "next/navigation";
import { Button } from "../ui/button";
import Link from "next/link";
import { ReactElement } from "react";

interface NavItemProps {
  name: string;
  icon: ReactElement;
  path: string;
}

export function NavItem({ name, path, icon }: NavItemProps) {
  const currentRoute = usePathname();
  return (
    <li>
      <Link href={path}>
        <Button
          variant="ghost"
          className={`w-full justify-start ${
            currentRoute === `${path}` ? "bg-accent text-accent-foreground" : ""
          }`}
        >
          {icon}
          {name}
        </Button>
      </Link>
    </li>
  );
}
