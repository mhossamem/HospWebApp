import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { HosplistService } from 'src/app/services/hosplist.service';
import { NavbarService } from 'src/app/services/navbar.service';
import { UserService } from 'src/app/services/user.service';
import { userObj } from 'src/app/userClass';

@Component({
  selector: 'app-user-update',
  templateUrl: './user-update.component.html',
  styleUrls: ['./user-update.component.css']
})
export class UserUpdateComponent implements OnInit {
  currUser: userObj;
  updatedUserForm: FormGroup;
  updatedPassForm: FormGroup;
  selectedHosp: String;
  updatedUser = new userObj;
  hospitalList: String[];
  userId: String;
  hide = true;

  constructor(public nav: NavbarService, private authService: UserService, private fb: FormBuilder, private router: Router, private hospListService: HosplistService, private _snackBar: MatSnackBar) {
    this.currUser = authService.getLoggedUser();
    this.hospitalList = this.hospListService.HospitalList;
    this.updatedUserForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.email, Validators.required]],
      contactInfo: ['', [Validators.max(9999999999), Validators.required]]

    });
    this.updatedPassForm = this.fb.group({
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.nav.show();
    this.assignUDetails();
  }

  assignUDetails() {
    this.updatedUserForm.get('firstName').setValue(this.currUser.firstName);
    this.updatedUserForm.get('lastName').setValue(this.currUser.lastName);
    this.updatedUserForm.get('email').setValue(this.currUser.email);
    this.updatedUserForm.get('contactInfo').setValue(this.currUser.contactInfo);
    this.selectedHosp = this.currUser.Hospital;
  }

  updateU() {
    this.authService.getUserId(this.currUser.email).subscribe((data: String) => {
      this.userId = data;
      this.updatedUser.firstName = this.updatedUserForm.controls.firstName.value;
      this.updatedUser.lastName = this.updatedUserForm.controls.lastName.value;
      this.updatedUser.email = this.updatedUserForm.controls.email.value;
      this.updatedUser.contactInfo = this.updatedUserForm.controls.contactInfo.value;
      this.updatedUser.Hospital = this.selectedHosp;
      this.authService.updateUserbyId(this.userId, this.updatedUser).subscribe(res => console.log(res));
      this._snackBar.open("User update was successful, please login with your new details","", {duration: 3000, panelClass:['green-snackbar']});
      this.router.navigate(['/login']);
      
    });
  }

  updatePass() {
    if (this.passwordInput == this.passwordconfirmInput) {
      this.authService.getUserId(this.currUser.email).subscribe((data: String) => {
        this.userId = data;
        this.authService.updateUserPass(this.userId, this.passwordInput).subscribe(res => console.log(res));
        this._snackBar.open("Password update was successful, please login with your new password","", {duration: 3000, panelClass:['green-snackbar']});
      this.router.navigate(['/login']);

      });
    }
    else
    {
      this._snackBar.open("Password confirmation mismatch","", {duration: 3000, panelClass: ['red-snackbar']});

    }

  }
  get passwordInput() { return this.updatedPassForm.get('password'); }
  get passwordconfirmInput() { return this.updatedPassForm.get('confirmPassword'); }

}
