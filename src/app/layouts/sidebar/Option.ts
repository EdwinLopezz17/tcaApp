export interface Option{
  label: string;
  icon: string;
  path: string;
}

export const options:Option[] = [
  {
    label: "Home",
    icon:"home",
    path:"/home"
  },
  {
    label: "Carteras",
    icon:"wallet",
    path:"/wallets"
  },
  {
    label: "Costo Efectivo",
    icon:"request_quote",
    path:"/effective-cost"
  },
  {
    label: "Documents",
    icon:"assignment",
    path:"/documents"
  },
  {
    label: "Procesos",
    icon:"article",
    path:"/process"
  },
  {
    label: "Profile",
    icon:"account_circle",
    path:"/profile"
  },
  {
    label: "Notificaciones",
    icon:"notifications",
    path:"/notifications"
  },
]
