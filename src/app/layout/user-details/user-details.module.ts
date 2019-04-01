import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserDetailsRoutingModule } from './user-details-routing.module';
import { UserDetailsComponent } from './user-details.component';
import { PageHeaderModule } from './../../shared';
import { MatPaginatorModule, MatButtonModule, MatIconModule, MatTableModule, MatFormFieldModule, MatInputModule } from '@angular/material';
import { NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { UserService } from 'src/app/shared/services/user.service';

@NgModule({
    imports: [CommonModule, UserDetailsRoutingModule,FormsModule, PageHeaderModule,MatPaginatorModule,MatButtonModule,
        NgbAlertModule,MatIconModule,MatTableModule,MatFormFieldModule,MatInputModule,],
    declarations: [UserDetailsComponent],
    providers:[UserService]
})
export class UserDetailsModule {}
