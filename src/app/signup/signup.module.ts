import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { SignupRoutingModule } from './signup-routing.module';
import { SignupComponent } from './signup.component';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule,MatInputModule, MatSelectModule ,MatDatepickerModule,MatButtonModule} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    SignupRoutingModule,FormsModule,ReactiveFormsModule,MatFormFieldModule,MatInputModule, MatSelectModule,MatDatepickerModule,MatButtonModule 
  ],
  declarations: [SignupComponent]
})
export class SignupModule { }
