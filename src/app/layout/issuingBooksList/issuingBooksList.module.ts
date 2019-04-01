import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IssuingBooksListRoutingModule } from './issuingBooksList-routing.module';
import { IssuingBooksListComponent } from './issuingBooksList.component';
import { PageHeaderModule } from './../../shared';
import { FormsModule } from '@angular/forms';
import { MatPaginatorModule, MatButtonModule, MatIconModule, MatTableModule, MatFormFieldModule, MatInputModule } from '@angular/material';
import { NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { UserService } from 'src/app/shared/services/user.service';
import { BookService } from 'src/app/shared/services/book.service';

@NgModule({
    imports: [CommonModule, IssuingBooksListRoutingModule, PageHeaderModule,
        FormsModule, MatPaginatorModule, MatButtonModule,
        NgbAlertModule, MatIconModule, MatTableModule, MatFormFieldModule, MatInputModule, ],
    declarations: [IssuingBooksListComponent],
    providers: [UserService,BookService]
})
export class IssuingBooksListModule {}
