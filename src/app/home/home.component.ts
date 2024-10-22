import { Component } from '@angular/core';
import {HeaderComponent} from "../share/components/header/header.component";
import {SidebarComponent} from "../layouts/sidebar/sidebar.component";
import {RouterOutlet} from "@angular/router";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeaderComponent,
    SidebarComponent,
    RouterOutlet
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
