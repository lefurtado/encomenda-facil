"use client";

import { usePathname } from "next/navigation";
import { Button } from "../ui/button";
import Link from "next/link";
import { ReactElement, useState } from "react";
import { ChevronDown, ChevronRight } from "lucide-react";

interface SubMenuItem {
  name: string;
  path: string;
  icon: ReactElement;
}

interface NavItemProps {
  name: string;
  icon: ReactElement;
  path?: string;
  subItems?: SubMenuItem[];
}

export function NavItem({ name, path, icon, subItems }: NavItemProps) {
  const currentRoute = usePathname();
  const [isExpanded, setIsExpanded] = useState(false);

  const hasActiveSubmenu = subItems?.some(item => currentRoute === item.path);

  if (subItems && subItems.length > 0) {
    return (
      <li>
        <Button
          variant="ghost"
          className={`w-full justify-start ${
            hasActiveSubmenu ? "bg-accent text-accent-foreground" : ""
          }`}
          onClick={() => setIsExpanded(!isExpanded)}
        >
          {icon}
          {name}
          {isExpanded ? (
            <ChevronDown className="ml-auto h-4 w-4" />
          ) : (
            <ChevronRight className="ml-auto h-4 w-4" />
          )}
        </Button>
        {isExpanded && (
          <ul className="ml-6 mt-2 space-y-1">
            {subItems.map((subItem) => (
              <li key={subItem.name}>
                <Link href={subItem.path}>
                  <Button
                    variant="ghost"
                    size="sm"
                    className={`w-full justify-start text-sm ${
                      currentRoute === subItem.path
                        ? "bg-accent text-accent-foreground"
                        : ""
                    }`}
                  >
                    {subItem.icon}
                    {subItem.name}
                  </Button>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </li>
    );
  }

  return (
    <li>
      <Link href={path!}>
        <Button
          variant="ghost"
          className={`w-full justify-start ${
            currentRoute === path ? "bg-accent text-accent-foreground" : ""
          }`}
        >
          {icon}
          {name}
        </Button>
      </Link>
    </li>
  );
}
