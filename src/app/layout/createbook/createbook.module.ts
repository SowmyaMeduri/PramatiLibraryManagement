import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { CreatBookRoutingModule } from './createbook-routing.module';
import { CreateBookComponent } from './createbook.component';
import { PageHeaderModule } from './../../shared';
import { MatIconModule, MatFormFieldModule, MatButtonModule, MatSelectModule,MatDatepickerModule,MatInputModule } from '@angular/material';
import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';
import { BookService } from 'src/app/shared/services/book.service';
@NgModule({
    imports: [CommonModule, CreatBookRoutingModule, PageHeaderModule,
        MatIconModule,MatFormFieldModule,MatButtonModule,FormsModule,ReactiveFormsModule,MatDatepickerModule,MatInputModule,
        NgxMatSelectSearchModule,MatSelectModule],
    declarations: [CreateBookComponent],
    providers:[BookService]
})
export class CreateBookModule {}
