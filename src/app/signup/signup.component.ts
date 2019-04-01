import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../router.animations';
import { TranslateService } from '@ngx-translate/core';
import { FormBuilder, FormGroup, Validators,FormControl, FormGroupDirective, NgForm,FormControlName } from '@angular/forms';
import { Router } from '@angular/router';
import {User, GenderType, RoleType} from '../model/user.model';
import { MustMatch } from '../Customvalidation/MustMatch';
import {AuthenticationService} from '../shared/services/authenticationService';
import {ErrorStateMatcher} from '@angular/material/core';

const now = new Date();
@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss'],
    animations: [routerTransition()]
})
export class SignupComponent implements OnInit {
    registerForm: FormGroup;
    passwordFormGroup: FormGroup;
    submitted = false;
    hide=true;
    constructor(private translate: TranslateService,private router : Router,private formBuilder:FormBuilder,private authService:AuthenticationService ) {
        this.translate.addLangs(['en', 'fr', 'ur', 'es', 'it', 'fa', 'de', 'zh-CHS']);
        this.translate.setDefaultLang('en');
        const browserLang = this.translate.getBrowserLang();
        this.translate.use(browserLang.match(/en|fr|ur|es|it|fa|de|zh-CHS/) ? browserLang : 'en');
    }
    year=now.getFullYear();
  month=now.getMonth();
  date=now.getDate();
  minDate = new Date(1900, 0, 1);
  maxDate = new Date(this.year, this.month,this.date);
  genderValues = GenderType;
  userValues = RoleType;
  genderKeys() : Array<string> {
    var keys = Object.keys(this.genderValues);
    return keys.slice(keys.length / 2);
  }
showError : boolean;
errormsg : string;
userKeys() : Array<string> {
  var keys = Object.keys(this.userValues);
  return keys.slice(keys.length / 2);
}
    ngOnInit() {
        this.registerForm = this.formBuilder.group({
          FirstName:['', Validators.compose([Validators.required, Validators.pattern('^[a-zA-Z ]*$')])] ,
          LastName: ['', Validators.compose([Validators.required, Validators.pattern('^[a-zA-Z ]*$')])],
          MiddleName: [''],
          UserName: ['', Validators.compose([Validators.required, Validators.pattern('^[a-zA-Z0-9]*$')])],
          Email: ['', Validators.compose([Validators.required, Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z]+.[a-zA-Z]{3}$')])],
          Gender: [GenderType.male, Validators.required] ,
          DateOfBirth:['',Validators.required],
          PhoneNumber:['',Validators.compose([Validators.required, Validators.pattern('^[0-9]{10}$')])],
          Password: ['', [Validators.required, Validators.minLength(6)]],
          ConfirmPassword: ['', Validators.required]
            }, {
                validator: MustMatch('Password', 'ConfirmPassword')
      });
      }
      matcher = new MyErrorStateMatcher();
      LoginForm()
      {
        this.router.navigate(['/login']);
      }
       get f() { return this.registerForm.controls; }
    
    onSubmit() {
        this.submitted = true;
        // stop here if form is invalid
        // if (this.registerForm.invalid) {
        //     return;
        // }
    this.authService.registration(this.registerForm.value).subscribe(
      details => {
        if(details)
        {
          this.showError = false;
        this.LoginForm();
        }
      },
      error  => {
        this.showError = true; 
        if(error.status == 400)
        {
          this.errormsg = error.error.Message;
        }   
       
      console.log("Error", error);
      }
      
    )
    
        ////alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value))
        console.log(JSON.stringify(this.registerForm.value));
      }
    }
      
    export class MyErrorStateMatcher implements ErrorStateMatcher
     {
      isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
        const isSubmitted = form && form.submitted;
        return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
      }
    }

