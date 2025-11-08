import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SocialLinksComponent } from './social-links.component';
import { SocialLinksRoutingModule } from './social-links-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SocialLinksRoutingModule
  ],
  declarations: [SocialLinksComponent]
})
export class SocialLinksModule { }
