import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbCarouselModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import {
    TimelineComponent,
    NotificationComponent,
    ChatComponent
} from './components';
import { StatModule } from '../../shared';
import { BookListComponent } from './components/BookList/booklist.component';
import { MatIconModule, MatTableModule, MatFormFieldModule, MatInputModule, MatPaginatorModule, MatButtonModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { BookService } from 'src/app/shared/services/book.service';
import { ConfigurationService } from 'src/app/shared/services/configurationService';
import { AuthenticationService } from 'src/app/shared/services/authenticationService';
import { UserService } from 'src/app/shared/services/user.service';
import { IssuedBookListComponent } from './components/userIssuedBookList/issuedBookList.component';
import { BookDetailsDonutChartComponent } from './components/bookdetailsdonutchart/bookdetailsdonutchart.component';

@NgModule({
    imports: [
        CommonModule,
        NgbCarouselModule, FormsModule, MatPaginatorModule, MatButtonModule,
        NgbAlertModule, MatIconModule, MatTableModule, MatFormFieldModule, MatInputModule,
        DashboardRoutingModule,
        StatModule
    ],
    declarations: [
        DashboardComponent,
        TimelineComponent,
        NotificationComponent,
        ChatComponent, BookListComponent, IssuedBookListComponent,BookDetailsDonutChartComponent
    ],
    providers: [ BookService, ConfigurationService, AuthenticationService, UserService]
})
export class DashboardModule {}
