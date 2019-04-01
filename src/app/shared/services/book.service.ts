import { Injectable }   from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpResponse, HttpEvent }   from '@angular/common/http';
// import 'rxjs/add/operator/catch';
//// import 'rxjs/add/observable/throw';
import {Observable} from 'rxjs';
import {tap, catchError, map} from 'rxjs/operators';

import { Book } from '../../model/book.model';
import { Isbn } from '../../model/isbn.model';
import { errorHandler } from '@angular/platform-browser/src/browser';
import { makeParamDecorator } from '@angular/core/src/util/decorators';
import { IssueBooks } from 'src/app/model/issueBooks';
import { User } from 'src/app/model/user.model';
import { BlockBooks } from 'src/app/model/blockBooks';

@Injectable()
export class BookService {

  constructor(private http: HttpClient) { }

  private GetAllBooks = 'https://librarymanagement20190208054654.azurewebsites.net/api/Books/GetAllBooks';
  private booksURL = 'https://librarymanagement20190208054654.azurewebsites.net/api/Books';
  private GetAllAvailableBooks = 'http://localhost:59179/api/Books/GetAllAvailableBooks';
  private serviceUrlForPost = 'http://localhost:59179/api/Books/AddNewCategoryBook';
  private addISBN = 'https://librarymanagement20190208054654.azurewebsites.net/api/Books/AddISBNDetails';
  private getAllIsbnURI = 'http://localhost:59179/api/Books/GetAllIsbnDetails';
  private editBooks = 'https://librarymanagement20190208054654.azurewebsites.net/api/Books/EditBook';
  private getUserIssuedBooks = 'https://librarymanagement20190208054654.azurewebsites.net/api/User/GetAllBooksByUserId';
  private getAllIssuedBooks = 'https://librarymanagement20190208054654.azurewebsites.net/api/User/GetAllIssuedBooks';
  private getBlockedBooks = 'https://librarymanagement20190208054654.azurewebsites.net/api/Books/GetAllBlockedBooks';

  private handleError;
    isbnDetails;

  getBooks(): Observable<Book[]> {
      return this.http.get<Book[]>(this.GetAllBooks).pipe(
        tap(data => console.log('All: ' + JSON.stringify(data))),
        catchError(this.handleError)
      );
    }

    getAvailableBooks(): Observable<Book[]> {
      return this.http.get<Book[]>(this.GetAllAvailableBooks).pipe(
        tap(data => console.log('All: ' + JSON.stringify(data))),
        catchError(this.handleError)
      );
    }

  deleteBook(isbn: Isbn): any {
            return this.http.request('DELETE', this.booksURL, {
              body : isbn
            }) .pipe(map(res => {
              return true;
                      }));
    }
    editBook(isbn: Isbn): any {
      return this.http.request('POST', this.editBooks, {
        body : isbn
      }) .pipe(map(res => {
        return true;
                }));
}
    postBook(book: Book, fileToUpload: File ): any {
      const formData: FormData = new FormData();
      formData.append('fileKey', fileToUpload, fileToUpload.name);
      formData.append('model', JSON.stringify(book));
      return this.http.post(this.serviceUrlForPost, formData).pipe(
        map((res: Response) => {
          if (res !== null) {
            localStorage.setItem('addedBookDetails', JSON.stringify(res));
            return res;
          }
          return false;
      }));
    }
    postExistingBook(isbnItem: any, Id: any): any {
      this.isbnDetails = { BookID : Id, TrackNo : isbnItem.ISBNNumber[0].TrackNo,
        Edition : isbnItem.ISBNNumber[0].Edition, Created : '',
        Occupied: false, Description: isbnItem.ISBNNumber[0].Description,
        Author: isbnItem.ISBNNumber[0].Author,
        PublishingYear: isbnItem.ISBNNumber[0].PublishingYear,
        RequestForBlock: '' };
      return this.http.post(this.addISBN, this.isbnDetails).pipe(
        map((res: Response) => {
            localStorage.setItem('IsbnDetailsForExistingBook', JSON.stringify(isbnItem));
            return true;
      }));
    }

    GetAllISBNDetails(): Observable<Isbn[]> {
      return this.http.get<Isbn[]>(this.getAllIsbnURI).pipe(
        tap(data => console.log('All: ' + JSON.stringify(data))),
        catchError(this.handleError)
      );
    }

    GetIssuedBooks(userDetails: User): any {
      return this.http.post(this.getUserIssuedBooks, userDetails).pipe(
        map((res: Response) => {
            return res;
      }));
    }

    GetAllIssuedBooks(): Observable<IssueBooks[]> {
      return this.http.get<IssueBooks[]>(this.getAllIssuedBooks).pipe(
        tap(data => console.log('All: ' + JSON.stringify(data))),
        catchError(this.handleError)
      );
    }

    GetAllBlockedBooks(): Observable<BlockBooks[]> {
      return this.http.get<BlockBooks[]>(this.getBlockedBooks).pipe(
        tap(data => console.log('All: ' + JSON.stringify(data))),
        catchError(this.handleError)
      );
    }
}
