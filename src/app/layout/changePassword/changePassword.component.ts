import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import {ErrorStateMatcher} from '@angular/material/core';
import { FormBuilder, FormGroup, Validators, FormControl, FormGroupDirective, NgForm, FormControlName } from '@angular/forms';
import { MustMatch } from '../../Customvalidation/MustMatch';
import { Router } from '@angular/router';
import { UserService } from '../../shared/services/user.service';
import { Login } from '../../model/login.model';

@Component({
    selector: 'app-changePassword',
    templateUrl: './changePassword.component.html',
    styleUrls: ['./changePassword.component.scss'],
    animations: [routerTransition()]
})
export class ChangePasswordComponent implements OnInit {
    // user:Login;
    constructor( private formBuilder: FormBuilder, private router: Router, private userService: UserService) {}
    changePasswordForm: FormGroup;
    hide = true;
    isMatched = false;
    matcher = new MyErrorStateMatcher();
    user;

    ngOnInit() {
        this.changePasswordForm = this.formBuilder.group({
            OldPassword: ['', [Validators.required, Validators.minLength(6)]],
            Password: ['', [Validators.required, Validators.minLength(6)]],
            ConfirmPassword: ['', Validators.required]
              }, {
                  validator: MustMatch('Password', 'ConfirmPassword')

         });

    }
    onSave() {
       if (this.changePasswordForm.value.OldPassword === this.changePasswordForm.value.Password) {
        this.isMatched = true;
       } else {
        const currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.user = {UserName: currentUser.UserName, OldPassword: this.changePasswordForm.value.OldPassword, Password: this.changePasswordForm.value.Password};
        console.log(this.user);

       this.userService.changePassword(this.user).subscribe(
        details => {
          if (details) {
            window.confirm('Password Changed Successfully');
            sessionStorage.removeItem('accessToken');
            // localStorage.removeItem('accessToken');
            localStorage.removeItem('currentUser');
            this.router.navigate(['/login']);
          }
        },
        error  => {
        console.log('Error', error);
        }
      );
     }
    }

    clearForm() {
        this.changePasswordForm.setValue({
            OldPassword: '',
            Password: '',
            ConfirmPassword : ''
          });
    }
}
export class MyErrorStateMatcher implements ErrorStateMatcher {
 isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
   const isSubmitted = form && form.submitted;
   return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
 }
}
