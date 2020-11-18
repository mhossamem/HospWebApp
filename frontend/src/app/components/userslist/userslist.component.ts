import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavbarService } from 'src/app/services/navbar.service';
import { UserService } from 'src/app/services/user.service';
import { userObj } from 'src/app/userClass';

@Component({
  selector: 'app-userslist',
  templateUrl: './userslist.component.html',
  styleUrls: ['./userslist.component.css']
})
export class UserslistComponent implements OnInit {
  currUser: userObj;

  constructor(public nav: NavbarService, private authService: UserService, private router: Router) {
    this.currUser = this.authService.getLoggedUser();
   }

  ngOnInit(): void {
    if(!this.currUser.isAdmin)
    {
      this.router.navigate(['/**']);
    }
    else
    {
      this.nav.show();
    }

  
  }

}
