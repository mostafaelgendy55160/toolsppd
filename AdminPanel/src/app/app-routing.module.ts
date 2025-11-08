import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuardService } from "./shared/services/auth-guard.service";


const routes: Routes = [
  { path: '', canActivate: [AuthGuardService], loadChildren: () => import('./pages/dashboard/dashboard.module').then(m => m.DashboardModule) },
  { path: 'signin', loadChildren: () => import('./pages/signin/signin.module').then(m => m.SigninModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
