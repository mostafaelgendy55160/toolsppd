import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TermsComponent } from './terms.component';
import { TermsRoutingModule } from './terms-routing.module';
import { QuillModule } from 'ngx-quill';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    TermsRoutingModule,
    QuillModule.forRoot()
  ],
  declarations: [TermsComponent]
})
export class TermsModule { }
