import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, Form } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { invT } from '../../inviteTokenClass';
import { GentokenService } from '../../services/gentoken.service';
import { userObj } from '../../userClass';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from '../../services/user.service';
import { HosplistService } from '../../services/hosplist.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  hide = true;
  registerForm: FormGroup;
  token: String;
  tokenObj = new invT;
  user = new userObj;
  isAuthorized: boolean;
  hospitalList: String [];
  isAdmin: boolean;

  constructor(private hospListService: HosplistService, private userService: UserService, private tokenService: GentokenService, private fb: FormBuilder, private router: Router, private _activatedRoute: ActivatedRoute , private _snackBar: MatSnackBar) {
    this.hospitalList = hospListService.HospitalList;
    this.registerForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.email, Validators.required]],
      emailconfirm: ['', [Validators.email, Validators.required]],
      password: ['', [Validators.required, Validators.min(8)]],
      contactInfo: ['', Validators.required],
    });
  }

    ngOnInit(): void {
      this.userService.logOut();
      this.getToken();
  }
  getToken() {
    this._activatedRoute.params.subscribe(parameter => {
      this.token = parameter['token'];
    });
    this.getTokenObj();
  }
  getTokenObj()
  {
    this.tokenService.getToken(this.token).subscribe((data: invT) => {
      if(data == null)
      {
        this.router.navigate(['/**']);
      }
      else
      {
        this.isAuthorized = true;
        this.user.isAdmin = data.isAdmin;
        this.user.Hospital = data.Hospital; 
      }
    });
  }
  registerUser() {
    if (this.registerForm.controls.emailconfirm.value == this.registerForm.controls.email.value) {
      this.user.firstName = this.registerForm.controls.firstName.value;
      this.user.lastName = this.registerForm.controls.lastName.value;
      this.user.email = this.registerForm.controls.email.value;
      this.user.password = this.registerForm.controls.password.value;
      this.user.contactInfo = this.registerForm.controls.contactInfo.value;
      console.log(this.user);
      this.userService.regUser(this.user).subscribe(res => console.log(res));
      this.tokenService.deleteToken(this.token).subscribe(res => console.log(res));
      this.router.navigate(['/login']);
      this._snackBar.open("Registration was successful, please login.","", {duration: 2000,});
    }
    else
    {
      this._snackBar.open("Email confirmation mismatch","", {duration: 2000,});
    }
  }
  get emailInput() { return this.registerForm.get('email'); }
  get passwordInput() { return this.registerForm.get('password'); }

}
