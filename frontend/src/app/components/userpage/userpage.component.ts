import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavbarService } from 'src/app/services/navbar.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-userpage',
  templateUrl: './userpage.component.html',
  styleUrls: ['./userpage.component.css']
})
export class UserpageComponent implements OnInit {
  user: Object;

  constructor(public nav: NavbarService, private userService: UserService, private router: Router) {

   }

  ngOnInit(): void {
    this.nav.show();
    this.userService.getUser().subscribe(account => {
      this.user = account;
      console.log(this.user);
    });
  }

}
