import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChangePasswordComponent } from './changePassword.component';
import { ChangePasswordRoutingModule } from './changePassword-routing.module';
import { PageHeaderModule } from './../../shared';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule,MatInputModule,MatButtonModule} from '@angular/material';
import { UserService } from 'src/app/shared/services/user.service';

@NgModule({
    imports: [CommonModule,ChangePasswordRoutingModule,PageHeaderModule,FormsModule, ReactiveFormsModule, MatFormFieldModule,MatInputModule,MatButtonModule],
    declarations: [ChangePasswordComponent],
    providers: [UserService]
})
export class ChangePasswordModule {}
