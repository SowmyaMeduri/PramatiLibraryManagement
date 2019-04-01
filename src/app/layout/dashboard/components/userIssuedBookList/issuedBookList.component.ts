import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { IssueBooks } from 'src/app/model/issueBooks';
import { User } from 'src/app/model/user.model';
import { BookService } from 'src/app/shared/services/book.service';

@Component({
    selector: 'app-issuedbooklist',
    templateUrl: './issuedBookList.component.html',
    styleUrls: ['./issuedBookList.component.scss']
})
export class IssuedBookListComponent implements OnInit {
    @ViewChild(MatPaginator) paginator: MatPaginator;
    dataSource: MatTableDataSource<any>;
    searchKey: string;
    booksDisplayColumns: string[];
    issuedbooks: IssueBooks[] = [];
    errorMessage: string;
    roleType: boolean;
    currentUser: User;
    UserName: any;
    constructor(private bookservice: BookService) { }
    ngOnInit() {
        const currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser !== null) {
        this.roleType = currentUser.RoleType === 0 ? true : false;
        this.UserName =  currentUser.UserName;
        }

        this.booksDisplayColumns = [ 'Name', 'Author', 'Edition', 'ISBNNumber', 'ReturnDate', 'IssuedOn'];
        this.bookservice.GetIssuedBooks(currentUser).subscribe(
            booklist => {
              booklist.forEach(x => {
                  this.issuedbooks.push(x);
                });
                console.log('issuedbook details' + JSON.stringify(this.issuedbooks));
              this.dataSource = new MatTableDataSource(this.issuedbooks);
              this.dataSource.paginator = this.paginator;
            },
            error => {
                console.error('error' + error);
                this.errorMessage = <any>error;
            }
          );
    }
    onSearchClear() {
        this.searchKey = '';
    }
    applyFilter() {
        this.dataSource.filter = this.searchKey.trim().toLowerCase();
    }
}
