import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { WebsiteTitleComponent } from './website-title.component';
import { WebsiteTitleRoutingModule } from './website-title-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    WebsiteTitleRoutingModule
  ],
  declarations: [WebsiteTitleComponent]
})
export class WebsiteTitleModule { }
