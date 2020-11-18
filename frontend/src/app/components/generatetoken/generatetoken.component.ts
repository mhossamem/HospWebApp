import { Component, OnInit } from '@angular/core';
import { GentokenService } from '../../services/gentoken.service';
import { Router } from '@angular/router';
import { invT } from '../../inviteTokenClass';
import { v4 as uuid } from 'uuid';
import { userObj } from 'src/app/userClass';
import { UserService } from 'src/app/services/user.service';
import { HosplistService } from 'src/app/services/hosplist.service';
import { NavbarService } from 'src/app/services/navbar.service';
@Component({
  selector: 'app-generatetoken',
  templateUrl: './generatetoken.component.html',
  styleUrls: ['./generatetoken.component.css']
})
export class GeneratetokenComponent implements OnInit {

  currinvT = new invT;
  currUser: userObj;
  hospitalList: String [];
  selectedHosp: String;

  constructor(private authService: UserService, private genTokenService: GentokenService, private router: Router, private hospListService:  HosplistService, public nav:NavbarService) {
    this.currUser = this.authService.getLoggedUser();
    this.hospitalList = this.hospListService.HospitalList;
   }


  addinvT_Admin()
  {

    this.currinvT.token = uuid();
    this.currinvT.isAdmin = true;
    this.currinvT.Hospital = this.selectedHosp;

    this.genTokenService.addToken(this.currinvT).subscribe(()=> {
      this.router.navigate(['/gentoken']);
    });

  }
  addinvT()
  {

    this.currinvT.token = uuid();
    this.currinvT.isAdmin = false;
    this.currinvT.Hospital = this.selectedHosp;
    console.log(this.selectedHosp);
    console.log(this.currinvT);


    this.genTokenService.addToken(this.currinvT).subscribe(()=> {
    });

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
