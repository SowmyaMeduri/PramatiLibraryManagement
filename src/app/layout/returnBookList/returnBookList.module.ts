import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReturnBookListRoutingModule } from './returnBookList-routing.module';
import { ReturnBookListComponent } from './returnBookList.component';
import { PageHeaderModule } from './../../shared';
import { MatInputModule, MatPaginatorModule, MatButtonModule, MatTableModule, MatIconModule, MatFormFieldModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { BookService } from 'src/app/shared/services/book.service';
import { UserService } from 'src/app/shared/services/user.service';

@NgModule({
    imports: [CommonModule, ReturnBookListRoutingModule, PageHeaderModule,
        FormsModule, MatPaginatorModule, MatButtonModule,
        NgbAlertModule, MatIconModule, MatTableModule, MatFormFieldModule, MatInputModule, ],
    declarations: [ReturnBookListComponent],
    providers: [BookService, UserService]
})
export class ReturnBookListModule {}
