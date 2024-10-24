import { Routes } from '@angular/router';
import {AuthPageComponent} from "./public/auth/page/auth-page/auth-page.component";
import {HomeComponent} from "./home/home.component";
import {WalletComponent} from "./core/wallet/wallet.component";
import {EffectiveCostComponent} from "./core/effective-cost/effective-cost.component";
import {ProcessComponent} from "./core/process/process.component";
import {ProfileComponent} from "./core/profile/profile.component";
import {NotificationsComponent} from "./core/notifications/notifications.component";
import {DocumentComponent} from "./core/document/document.component";

export const routes: Routes = [

  {path: '', redirectTo: 'auth', pathMatch: 'full' },
  {path: 'auth', component: AuthPageComponent},
  {path: 'home', component: HomeComponent},
  {path: 'wallets', component: WalletComponent },
  {path: 'effective-cost', component: EffectiveCostComponent},
  {path: 'process', component: ProcessComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'notifications', component: NotificationsComponent},
  {path: 'documents', component: DocumentComponent},

];
