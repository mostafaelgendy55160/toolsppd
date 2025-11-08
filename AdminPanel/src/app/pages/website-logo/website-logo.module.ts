import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { WebsiteLogoComponent } from './website-logo.component';
import { WebsiteLogoRoutingModule } from './website-logo-routing.module';
import { DragdropDirective } from '../../directives/dragdrop.directive';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    WebsiteLogoRoutingModule
  ],
  declarations: [WebsiteLogoComponent,
    DragdropDirective],
  entryComponents: [DragdropDirective],
  exports: [DragdropDirective]
})
export class WebsiteLogoModule { }
