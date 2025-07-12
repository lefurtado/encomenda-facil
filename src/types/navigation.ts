import { ReactElement } from "react";

export interface SubMenuItem {
  name: string;
  path: string;
  icon: any; // LucideIcon type
}

export interface NavigationItem {
  name: string;
  icon: any; // LucideIcon type
  path?: string;
  subItems?: SubMenuItem[];
} 