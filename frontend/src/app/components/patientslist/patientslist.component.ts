import { Component, OnInit } from '@angular/core';
import { PatientService } from '../../services/patient.service';
import { MatButtonModule } from '@angular/material/button';
import { UserService } from '../../services/user.service';
import { FormGroup, FormBuilder, Validators, Form } from'@angular/forms';
import { Router } from '@angular/router';
import { DataRowOutlet } from '@angular/cdk/table';
import { Patient } from 'src/app/patient.model';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { PatientObj } from 'src/app/patientClass';
import { userObj } from 'src/app/userClass';
import { NavbarService } from 'src/app/services/navbar.service';
@Component({
  selector: 'app-patientslist',
  templateUrl: './patientslist.component.html',
  styleUrls: ['./patientslist.component.css']
})
export class PatientslistComponent implements OnInit {
  id: String;
  currPatient: Patient;
  searchForm: FormGroup;
  HospPatients: Patient [];
  currUser: userObj;

  constructor(private authService: UserService, private patientService:PatientService, private router: Router, private fb:FormBuilder, public dialog: MatDialog, public nav: NavbarService) {
    this.currUser = this.authService.getLoggedUser();
    this.searchForm = this.fb.group({
      searchInp: ['',Validators.required],
      searchCrit: ['', Validators.required]
    });
   }

  ngOnInit(): void {
    this.nav.show();
    this.fetchAllPbyHospital();


  }
  fetchAllPbyHospital()
  {
    this.patientService.getPatientsbyHosp(this.currUser.Hospital).subscribe((data: Patient[]) => {
      this.HospPatients = data;
    });
  }

  clearSearch()
  {
    this.currPatient = null;
    this.fetchAllPbyHospital();
  }

  clearTable()
  {
    this.HospPatients = null;
  }

  fetchP()
  {
    this.clearTable();
    if(this.searchForm.controls.searchCrit.value=="n_ID")
    {
    this.patientService.getPatientbynID(this.searchForm.controls.searchInp.value).subscribe((data:Patient) =>{
      this.currPatient = data;
    });}
    else{
      this.patientService.getPatientbyfullNameAr(this.searchForm.controls.searchInp.value).subscribe((data:Patient)=>
      {
        this.currPatient = data;
      });
    }
  }
  IsUserAuthorized()
  {
    if((this.authService.isUserAuthorized(this.currPatient.Hospital)) || this.currUser.isAdmin)
    {
      return false;
    }
    else
    {
      return true;
    }

  }
  viewPatient(id: any)
  {
    this.router.navigate([`/viewdetails/`,id]);
  }
  updatePatient(id: any)
  {
    this.router.navigate([`/update/`,id]);
  }
  deletePatient(id: any)
  {
    if(confirm("Are you sure to delete the record of " + this.currPatient.fullName)) {
      this.patientService.deletePatient(id).subscribe(() => {
      });
      this.fetchP();
    }
  }

}
