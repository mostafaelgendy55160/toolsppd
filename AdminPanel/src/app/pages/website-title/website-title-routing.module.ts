import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WebsiteTitleComponent } from './website-title.component';

const routes: Routes = [
  {
    path: '',
    component: WebsiteTitleComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WebsiteTitleRoutingModule { }
