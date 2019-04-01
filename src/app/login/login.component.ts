import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { routerTransition } from '../router.animations';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from '../shared/services/authenticationService';
import {
  AuthService,
  FacebookLoginProvider,
  GoogleLoginProvider
} from 'angular5-social-login';
import { PyramidSeriesDataItem } from '@amcharts/amcharts4/charts';


@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    animations: [routerTransition()]
})
export class LoginComponent implements OnInit {
    loginForm: FormGroup;
    hide = true;
    submitted = false;
    isValid = false;
    HideForm: boolean;
    myVar: boolean;
    checkvalue: boolean;
    ShowInvalidLogin: boolean;
    constructor(
        private translate: TranslateService, private socialAuthService: AuthService,
        public router: Router, private formBuilder: FormBuilder,  private authService: AuthenticationService
        ) {
            this.translate.addLangs(['en', 'fr', 'ur', 'es', 'it', 'fa', 'de', 'zh-CHS']);
            this.translate.setDefaultLang('en');
            const browserLang = this.translate.getBrowserLang();
            this.translate.use(browserLang.match(/en|fr|ur|es|it|fa|de|zh-CHS/) ? browserLang : 'en');
    }

    ngOnInit() {
        this.loginForm = this.formBuilder.group({
            UserName: ['', Validators.required],
            Password: ['', Validators.required]
        });
    }

    onLoggedin() {
        this.submitted = true;
        if (this.loginForm.invalid) {
            return;
        }
        this.authService.login(this.loginForm.value).subscribe(
          details => {
            if (details === true) {
              localStorage.removeItem('currentUser');
              this.ShowInvalidLogin = false;
              this.authService.GetCurrentUser().subscribe(
                data => {
                    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
                    if (data && currentUser !== null) {
                  this.router.navigate(['/dashboard']); }
                },
                error  => {
                    console.log('Error', error);
                    }
              );
            } else {
              this.ShowInvalidLogin = true;
            }
          },
          error  => {
          console.log('Error', error);
          this.ShowInvalidLogin = true;
          }
        );
        // localStorage.setItem('isLoggedin', 'true');
    }

    public socialSignIn() {
      let socialPlatformProvider;
        socialPlatformProvider = GoogleLoginProvider.PROVIDER_ID;
      this.socialAuthService.signIn(socialPlatformProvider).then(
        (userData) => {
          console.log( ' sign in data : ' , userData);
          // Now sign-in with userData

          const chunks = userData.email.split('@');
          const domain = chunks[1];
          if (domain === ('pramati.com') || domain === 'imaginea.com') {
            sessionStorage.setItem('accessToken', userData.token);

            localStorage.removeItem('currentUser');
            this.ShowInvalidLogin = false;
            localStorage.setItem('currentUser', JSON.stringify(userData));
            this.router.navigate(['/dashboard']);
          } else {
              this.ShowInvalidLogin = true;
          }
        }
      );
    }
}
