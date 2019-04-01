import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BooksRoutingModule } from './books-routing.module';
import { BooksComponent } from './books.component';
import { PageHeaderModule } from './../../shared';
import { MatFormFieldModule, MatPaginatorModule, MatButtonModule, MatIconModule, MatTableModule, MatInputModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { BookService } from 'src/app/shared/services/book.service';
import { UserService } from 'src/app/shared/services/user.service';
import { ChartsModule as Ng2Charts } from 'ng2-charts';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { AmChartsModule } from "@amcharts/amcharts3-angular";
import { ReturnBookIndicatorComponent } from './component/returnbookIndicator/returnbookIndicator.component';

@NgModule({
    imports: [CommonModule, BooksRoutingModule, PageHeaderModule,
        FormsModule, MatPaginatorModule, MatButtonModule,
        NgbAlertModule, MatIconModule, MatTableModule, MatFormFieldModule, MatInputModule,
        Ng2SmartTableModule,AmChartsModule
    ],
    declarations: [BooksComponent,ReturnBookIndicatorComponent],
    providers: [BookService, UserService]
})
export class BooksModule {}
