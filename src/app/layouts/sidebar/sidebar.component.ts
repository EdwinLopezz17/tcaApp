import { Component } from '@angular/core';
import {MatIcon} from "@angular/material/icon";
import {RouterLink, RouterLinkActive} from "@angular/router";

interface Option{
  label: string;
  icon: string;
  path: string;
}
const options:Option[] = [
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


@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [
    MatIcon,
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {

  protected readonly options = options;
}
