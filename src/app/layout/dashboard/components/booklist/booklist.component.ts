import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import {MatPaginator, MatTableDataSource, MatSort, MatSortable, MatDialog, MatDialogConfig} from '@angular/material';
import{BookService} from '../../../../shared/services/book.service';
import{Book} from '../../../../model/book.model';
import { Router } from '@angular/router';
import {Observable} from 'rxjs';
// import { CreatebookdataComponent } from './../createbookdata/createbookdata.component';
import { AuthenticationService } from '../../../../shared/services/authenticationService';
import {ConfigurationService} from  '../../../../shared/services/configurationService';
import { User, RoleType } from '../../../../model/user.model';
// import {ConfirmationDialogService} from '../services/conformation-dialog.service'



@Component({
  selector: 'app-booklist',
  templateUrl: './booklist.component.html',
  styleUrls: ['./booklist.component.scss'],
  providers: [NgbCarouselConfig]
})
export class BookListComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  dataSource: MatTableDataSource<any>;
  searchKey: string;
  displayedColumns: string[] ;
  items;
  nameChecked: false;
  authorChecked: false;
  books: Book[] = [];
  booksJSON ;
  errorMessage: string;
  roleType: boolean;
  currentUser: User;
  result;
  checkval = false;
  // ,private confirmationDialogService: ConfirmationDialogService
  constructor(private config: NgbCarouselConfig, private bookservice: BookService, private router:
     Router, private dialog: MatDialog, private authService: AuthenticationService, private configService: ConfigurationService) {
    config.interval = 100000;
    config.wrap = true;
    config.keyboard = true;
    config.pauseOnHover = true;


  }

  ngOnInit() {
  // this.configService.getConfigDetails().subscribe(
  //   details => {
  //   this.result = details;
  //   localStorage.setItem('configValues', JSON.stringify(details));
  //   } ,
  //   error => {
  //     console.error('getConfigDetails' + error);
  //    this.errorMessage = <any>error; });
  //   this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
  //   if (this.currentUser !== null) {
  //   this.roleType = this.currentUser.RoleType === 0 ? true : false;
  //   }
    this.displayedColumns = [ 'Image', 'Name', 'AvailableCopies', 'NumberOfCopies'];

  this.bookservice.getAvailableBooks().subscribe(
    booklist => {
      booklist.forEach(x => {
          this.books.push(x);
        });
        console.log(JSON.stringify(this.books));
      this.dataSource = new MatTableDataSource(this.books);

      this.dataSource.paginator = this.paginator;
    },
    error => this.errorMessage = <any>error
  );


  }

  onSearchClear() {
    this.searchKey = '';
    //// this.applyFilter();
  }

  applyFilter(filterValue: string) {
    //// this.dataSource.filter = filterValue;
    this.dataSource.filter = this.searchKey.trim().toLowerCase();

    //// this.books.find(x=>x.ISBNNumber.forEach(y=>y.))

  }

  nameClick() {
    this.checkval = this.nameChecked;
  }
  authorClick() {

  }
  onChange() {

  }

  deleteBook(book: Book) {
    // this.confirmationDialogService.confirm('Please confirm..', 'Do you really want to ... ?',book)
    // .then((confirmed) =>{
    // if(confirmed)
    // {
    //   this.bookservice.deleteBook(book).subscribe(
    //   data => {
    //     if(data){
    //       const i = this.books.findIndex(e=>e.Id===book.Id);
    //     if(i!== -1){
    //     this.books.splice(i,1);
    //     this.dataSource = new MatTableDataSource(this.books);
    //     }}})
    // }}
    //  )
    // .catch(() => console.log('User dismissed the dialog (e.g., by using ESC, clicking the cross icon, or clicking outside the dialog)'));
  }

  editBook(book: Book) {

  }

CreateBook() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '70%';
  }
}
