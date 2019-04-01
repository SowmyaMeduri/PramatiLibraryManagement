import { Component, OnInit, ViewChild } from '@angular/core';
import { routerTransition } from '../../router.animations';
import {BookService} from '../../shared/services/book.service';
// import { Book } from '../../model/book.model';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { User } from 'src/app/model/user.model';
import { Isbn } from 'src/app/model/isbn.model';
import { AdminConfiguration } from 'src/app/model/adminConfiguration.model';
import { UserService } from 'src/app/shared/services/user.service';
@Component({
    selector: 'app-tables',
    templateUrl: './books.component.html',
    styleUrls: ['./books.component.scss'],
    animations: [routerTransition()]
})
export class BooksComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  dataSource: MatTableDataSource<any>;
  isbnDataSource: MatTableDataSource<any>;
  searchKey: string;
  // dataSource: string[] ;
   isbnDisplayColumns: string[];
  items;
  nameChecked: false;
  authorChecked: false;
  books: Isbn[] = [];
  booksJSON ;
  errorMessage: string;
  roleType: boolean;
  currentUser: User;
  result;
  checkval = false;
  configValue: AdminConfiguration;
  showIsbn: boolean;
  excessLimitMsg: string;
  settings;
  characters;
    constructor(private bookservice: BookService, private userService: UserService) {

    }

    getDemoData(): any {
      let data: [
        {
            'id': '1',
            'name': 'Peter Dinklage',
            'age': '45'
        },
        {
            'id': '2',
            'name': 'Lina Heady',
            'age': '43'
        },
        {
            'id': '3',
            'name': 'Emilia Clarke',
            'age': '30'
        },
        {
            'id': '4',
            'name': 'Kit Harrington',
            'age': '30'
        },
        {
            'id': '5',
            'name': 'Sean Bean',
            'age': '50'
        }];
        return data;
    }

    ngOnInit() {


          this.configValue = JSON.parse(localStorage.getItem('configValues'));
          this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
          if (this.currentUser !== null) {
          this.roleType = this.currentUser.RoleType === 0 ? true : false;
          }
          if (!this.roleType) {
            this.isbnDisplayColumns = [ 'TrackNo', 'BookName', 'Author', 'Description', 'PublishingYear', 'edit', 'delete'];
          } else {
            this.isbnDisplayColumns = [ 'TrackNo', 'BookName', 'Author', 'Description', 'PublishingYear', 'Block'];
          }
        this.bookservice.GetAllISBNDetails().subscribe(
          booklist => {
            booklist.forEach(x => {
                this.books.push(x);
                this.settings = {
                  hideSubHeader: true,
                  actions: false,
                  columns: {
                    TrackNo: {
                      title: 'TrackNo'
                    },
                    BookName: {
                      title: 'BookName'
                    },
                    Author: {
                      title: 'Author'
                    },
                    Description: {
                      title: 'Description'
                    },
                    PublishingYear: {
                      title: 'PublishingYear'
                    }
                   }
                };
              });
              console.log('isbn details all' + JSON.stringify(this.books));
            this.dataSource = new MatTableDataSource(this.books);
            this.dataSource.paginator = this.paginator;
          },
          error => this.errorMessage = <any>error
        );
        }
        onSearchClear() {
            this.searchKey = '';
          }
          applyFilter(filterValue: string) {
            this.dataSource.filter = this.searchKey.trim().toLowerCase();
          }

        deleteBook(book: Isbn) {
          if (window.confirm('Do u want to delete?')) {
          this.bookservice.deleteBook(book).subscribe(
            data => {
              if (data) {
                const i = this.books.findIndex(e => e.TrackNo === book.TrackNo);
              if (i !== -1) {
              this.books.splice(i, 1);
              this.dataSource = new MatTableDataSource(this.books);
              }}},
              error => {console.log(error); });
            }
          }
          editBook(book: Isbn) {
            book.Description = 'check edit';
            this.bookservice.editBook(book).subscribe(
              data => {

              },
              error => {console.log(error); });
          }
          backToBook(book: Isbn) {
            if (window.confirm('Do u want to delete?')) {

            }
          }
          BlockBook(isbn: Isbn) {
            if (window.confirm('Do u want to delete?')) {
            if (this.configValue.BookBlockLimit > this.currentUser.BlockedCopies) {
                  this.userService.BlockBook(isbn).subscribe(data => {
              if (data === true) {
                isbn.Occupied = true;
                }
                  });
            } else {
              this.excessLimitMsg = 'Cannot block book, As it is exceeded the config value';
            }
          }
        }
}
