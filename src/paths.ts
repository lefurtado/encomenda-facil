import {
  SettingsIcon,
  BoxIcon,
  UsersIcon,
  LayoutDashboardIcon,
  UserIcon,
  BuildingIcon,
  PaletteIcon,
  DatabaseIcon,
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
    icon: SettingsIcon,
    name: "Configuração",
    subItems: [
      {
        name: "Perfil",
        path: "/configuracao/perfil",
        icon: UserIcon,
      },
      {
        name: "Blocos",
        path: "/configuracao/blocos",
        icon: BuildingIcon,
      },
      {
        name: "Tipos de Encomenda",
        path: "/configuracao/tipos",
        icon: PaletteIcon,
      },
      {
        name: "Backup",
        path: "/configuracao/backup",
        icon: DatabaseIcon,
      },
    ],
  },
];
