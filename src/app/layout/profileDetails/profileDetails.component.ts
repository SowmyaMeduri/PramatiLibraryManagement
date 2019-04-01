import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { UserService } from 'src/app/shared/services/user.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { User } from 'src/app/model/user.model';

@Component({
    selector: 'app-profiledetails',
    templateUrl: './profileDetails.component.html',
    styleUrls: ['./profileDetails.component.scss'],
    animations: [routerTransition()]
})
export class ProfileDetailsComponent implements OnInit {
    fileToUpload: File = null;
    imageUrl: string;
    userDetails: FormGroup;
    url: any;
    user: User;
    isImageUploaded = false;
    constructor(private userService: UserService , private formBuilder: FormBuilder) {}

    ngOnInit() {
        const currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.userService.getUsersById(currentUser).subscribe(
            data => {
                if (data !== null) {
                this.user = data;
                this.GetDetails(this.user);
                }
            }, error => {
                console.log('getUsersById' + error);
            }
        );
    }

    GetDetails(user: User) {
        if (this.user !== null) {
            this.userDetails = this.formBuilder.group(
                {
                  UserName: [this.user.UserName , Validators.required],
                  FirstName: [this.user.FirstName, Validators.required],
                  MiddleName: [this.user.MiddleName, Validators.required],
                  LastName: [this.user.LastName , Validators.required],
                  Email: [this.user.Email, Validators.required],
                  DateOfBirth: [this.user.DateOfBirth, Validators.required],
                  Gender: [this.user.Gender, Validators.required],
                  RoleType: [this.user.RoleType , Validators.required],
                  PhoneNumber: [this.user.PhoneNumber, Validators.required],
                  Image: [this.user.Image, Validators.required],
                }
              );
            }
    }

    // uploadImage(file: FileList) {
    //     this.fileToUpload = file.item(0);
    //     const reader = new FileReader();
    //     reader.onload = (event: any) => {
    //       this.imageUrl = event.target.result;
    //     };
    //     reader.readAsDataURL(this.fileToUpload);
    //   }
      UploadImage(event) {
        this.isImageUploaded = true;
        if (event.target.files && event.target.files[0]) {
          const reader = new FileReader();
        reader.onload = (event: ProgressEvent) => {
          this.url = (<FileReader>event.target).result;
        };

        reader.readAsDataURL(event.target.files[0]);
      }
        console.log(event);
      }
    editUserDetails() {

        this.userService.editUser(this.userDetails.value, this.fileToUpload).subscribe(
            data => {
              if (data) {
                console.log('add success');
              }},
              error  => {
              console.log('Error', error);
              });
    }

    // InitializeUserDetails() {
    //   this.userDetails.setValue({
    //     FirstName: '',
    //     LastName: '',
    //     MiddleName: '',
    //     DateOfBirth: '',
    //     PhoneNumber: ''
    //   });

    // }
    // onClose() {
    //   this.userDetails.reset();
    //   this.InitializeUserDetails();
    // }
}
