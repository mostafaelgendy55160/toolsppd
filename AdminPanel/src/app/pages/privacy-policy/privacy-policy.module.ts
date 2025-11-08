import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PrivacyPolicyComponent } from './privacy-policy.component';
import { PrivacyPolicyRoutingModule } from './privacy-policy-routing.module';
import { QuillModule } from 'ngx-quill';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    PrivacyPolicyRoutingModule,
    QuillModule.forRoot()
  ],
  declarations: [PrivacyPolicyComponent]
})
export class PrivacyPolicyModule { }
