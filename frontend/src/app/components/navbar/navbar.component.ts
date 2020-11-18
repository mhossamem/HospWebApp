import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavbarService } from 'src/app/services/navbar.service';
import { userObj } from 'src/app/userClass';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  currUser: userObj;

  constructor(private userService: UserService, private router: Router, public nav: NavbarService) {
  }

  ngOnInit(): void {
  }
  isAdminAuthorized() {
    this.currUser = this.userService.getLoggedUser();
    if (this.currUser) {
      return this.currUser.isAdmin;
    }
  }

}
