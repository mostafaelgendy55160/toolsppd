import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';

@NgModule({
  exports: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent],
  declarations: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent],
  entryComponents: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})

export class ComponentsModule { }
