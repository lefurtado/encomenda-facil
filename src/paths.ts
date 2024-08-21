import {
  SettingsIcon,
  BoxIcon,
  UsersIcon,
  LayoutDashboardIcon,
} from "lucide-react";

export const paths = [
  {
    path: "/",
    icon: LayoutDashboardIcon,
    name: "Home",
  },
  {
    path: "/encomendas",
    icon: BoxIcon,
    name: "Encomendas",
  },
  {
    path: "/moradores",
    icon: UsersIcon,
    name: "Moradores",
  },
  {
    path: "/configuracao",
    icon: SettingsIcon,
    name: "Configuração",
  },
];
