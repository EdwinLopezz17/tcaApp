import { Routes } from '@angular/router';
import {AuthPageComponent} from "./public/auth/page/auth-page/auth-page.component";
import {HomeComponent} from "./home/home.component";

export const routes: Routes = [

  {path: '', redirectTo: 'auth', pathMatch: 'full' },
  {path: 'auth', component: AuthPageComponent},
  {path: 'home', component: HomeComponent},



];
