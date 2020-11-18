import { Component, OnInit } from '@angular/core';
import { PatientService } from '../../services/patient.service';
import { PatientObj } from '../../patientClass';
import { Router, ActivatedRoute } from '@angular/router';
import { MatTab } from '@angular/material/tabs';
import { MatExpansionPanel } from'@angular/material/expansion';
import { NavbarService } from 'src/app/services/navbar.service';
@Component({
  selector: 'app-viewpatientdetails',
  templateUrl: './viewpatientdetails.component.html',
  styleUrls: ['./viewpatientdetails.component.css']
})
export class ViewpatientdetailsComponent implements OnInit {
  currPatient = new PatientObj;
  id: String;
  panelOpenState: false;
  dofDialysis: String;
  dofAC: String;
  dofLab: String;
  dOfHepBV: String;
  dOfInfV: String;


  constructor(public nav: NavbarService, private patientSrvc:PatientService,private router: Router, private _activatedRoute: ActivatedRoute) { }
  

  ngOnInit(): void {
    this.nav.show();
    this._activatedRoute.params.subscribe(parameter => {
      this.id = parameter['id'];
    })
    this.getPDetails();

  }

  getPDetails()
  {
    this.patientSrvc.getPatientById(this.id).subscribe((data:PatientObj)=>{
      this.currPatient = data;
      this.dofDialysis = this.reverseDate(this.currPatient.dosDialysis.substring(0,10));
      this.dofAC = this.reverseDate(this.currPatient.dOfAccessCreation.substring(0,10));
      this.dofLab = this.reverseDate(this.currPatient.labDate.substring(0,10));
      if(this.currPatient.HepBVDate)
      {
        this.dOfHepBV = this.reverseDate(this.currPatient.HepBVDate.substring(0,10));
      }
      if(this.currPatient.InfVDate)
      {
        this.dOfInfV = this.reverseDate(this.currPatient.InfVDate.substring(0,10));
      }


    });
  }
  reverseDate(str : String)
  {
   return str.split("-").reverse().join("-"); 
  }
}


