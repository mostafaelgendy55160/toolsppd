import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WebsiteLogoComponent } from './website-logo.component';

const routes: Routes = [
  {
    path: '',
    component: WebsiteLogoComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WebsiteLogoRoutingModule { }
