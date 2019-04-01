import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule,MatInputModule, MatSelectModule,MatButtonModule } from '@angular/material';

@NgModule({
    imports: [
        CommonModule,MatFormFieldModule,MatInputModule, MatSelectModule,MatButtonModule,
        TranslateModule,FormsModule,ReactiveFormsModule,
        LoginRoutingModule],
    declarations: [LoginComponent]
})
export class LoginModule {}
