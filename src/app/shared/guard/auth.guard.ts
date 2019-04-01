import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Router } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private router: Router) {}

    canActivate() {
        // localStorage.getItem('isLoggedin')
        // localStorage.getItem('accessToken')
        if (sessionStorage.getItem('accessToken')) {
            return true;
        }

        this.router.navigate(['/login']);
        return false;
    }
}
