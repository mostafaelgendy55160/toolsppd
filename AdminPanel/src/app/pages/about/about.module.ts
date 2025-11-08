import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AboutComponent } from './about.component';
import { AboutRoutingModule } from './about-routing.module';
import { QuillModule } from 'ngx-quill';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AboutRoutingModule,
    QuillModule.forRoot()
  ],
  declarations: [AboutComponent]
})
export class AboutModule { }
