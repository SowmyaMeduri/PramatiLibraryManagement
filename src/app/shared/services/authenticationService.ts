import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { map, tap, catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import {User} from '../../model/user.model';
import {Login} from '../../model/login.model';

@Injectable({
    providedIn: 'root'
})
export class AuthenticationService {


    constructor(private http: HttpClient, private router: Router) {
     }

    login(login: Login) {
        const getHeaders = new HttpHeaders({
            'Content-Type': 'text/plain',
            'No-Auth' : 'True',
        });
        const body = 'username=' + login.UserName + '&password=' + login.Password + '&grant_type=' + 'password';
        return this.http.post<any>('https://librarymanagement20190208054654.azurewebsites.net/token', body, { headers: getHeaders })
        .pipe(map(user => {
            if (user && user.access_token) {
                // localStorage.setItem('accessToken', user.access_token);
                sessionStorage.setItem('accessToken', user.access_token);
            }
            return true;
        }));
    }

    GetCurrentUser() {
        const getHeaders = new HttpHeaders({
            'Content-Type': 'text/plain',
        });
        return this.http.get<any>('https://librarymanagement20190208054654.azurewebsites.net/api/GetUserClaims')
            .pipe(map(user => {
                if (user) {
                    console.log('kinnu' + JSON.stringify(user));
                    localStorage.setItem('currentUser', JSON.stringify(user));
                    return true;
                }
            }));
    }

    registration(user: User) {
        const getHeaders = new HttpHeaders({
            'Content-Type': 'application/json',
            'No-Auth' : 'True',
        });
        return this.http.post('https://librarymanagement20190208054654.azurewebsites.net/api/Registration/AddNewUser', user, { headers: getHeaders })
        .pipe(map(res => {
        return true;
        }));
    }

    public getToken(): string {
        // localStorage.getItem('accessToken');
      return sessionStorage.getItem('accessToken');
    }

    logout() {
        sessionStorage.removeItem('accessToken');
        // localStorage.removeItem('accessToken');
        localStorage.removeItem('currentUser');
        localStorage.clear();
    }
}
