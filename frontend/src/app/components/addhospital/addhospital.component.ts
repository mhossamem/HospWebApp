import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HosplistService } from 'src/app/services/hosplist.service';
import { NavbarService } from 'src/app/services/navbar.service';
import { UserService } from 'src/app/services/user.service';
import { userObj } from 'src/app/userClass';

@Component({
  selector: 'app-addhospital',
  templateUrl: './addhospital.component.html',
  styleUrls: ['./addhospital.component.css']
})
export class AddhospitalComponent implements OnInit {
  currUser: userObj;
  newHospital: String = "";

  constructor(private authService: UserService, private router: Router, private hospService: HosplistService, public nav:NavbarService) {
    this.currUser = authService.getLoggedUser();
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
  addHosp()
  {
    this.hospService.addHosp(this.newHospital);
  }

}
