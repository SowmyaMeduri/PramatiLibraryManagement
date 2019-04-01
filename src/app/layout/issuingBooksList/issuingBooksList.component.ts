import { Component, OnInit, ViewChild } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { UserService } from 'src/app/shared/services/user.service';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { Isbn } from 'src/app/model/isbn.model';
import { BookService } from 'src/app/shared/services/book.service';
import { IssueBooks } from 'src/app/model/issueBooks';
import { BlockBooks } from 'src/app/model/blockBooks';

@Component({
    selector: 'app-issuingbookslist',
    templateUrl: './issuingBooksList.component.html',
    styleUrls: ['./issuingBooksList.component.scss'],
    animations: [routerTransition()]
})
export class IssuingBooksListComponent implements OnInit {
    @ViewChild(MatPaginator) paginator: MatPaginator;
  dataSource: MatTableDataSource<any>;
  searchKey: string;
  isbnDisplayColumns: string[];
  books: BlockBooks[] = [];
    constructor(private userService: UserService, private bookService: BookService) {}
    ngOnInit() {
        this.isbnDisplayColumns = [ 'BookName', 'UserName', 'Author', 'Edition', 'ISBNNumber', 'issue'];
        this.bookService.GetAllBlockedBooks().subscribe(
            booklist => {
              booklist.forEach(x => {
                  this.books.push(x);
                });
                console.log('isbn details all' + JSON.stringify(this.books));
              this.dataSource = new MatTableDataSource(this.books);
              this.dataSource.paginator = this.paginator;
            },
            error => {
               console.log('GetAllBlockedBooks' + error);
            });
    }
    issueBook(issuedBook: BlockBooks) {
      if (window.confirm('do u want to issue?')) {
        this.userService.issueBook(issuedBook).subscribe(data => {
    if (data) {
      const i = this.books.findIndex(e => e.ISBNNumber === issuedBook.ISBNNumber);
    if (i !== -1) {
    this.books.splice(i, 1);
    this.dataSource = new MatTableDataSource(this.books);
    }}
        },
        error => {
           console.log('GetAllBlockedBooks' + error);
        }
        );
      }
    }
}
