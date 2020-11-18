import { Component } from '@angular/core';
import { UserService } from './services/user.service';
import { userObj } from './userClass';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'DPDP';
  currUser:userObj;
  constructor(private authService: UserService)
  {
    this.currUser = authService.getLoggedUser();
  }
}
