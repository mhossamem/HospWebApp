import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, Form } from '@angular/forms';
import { Router } from '@angular/router';
import { PatientService } from '../../services/patient.service';
import { PatientObj } from '../../patientClass';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HosplistService } from '../../services/hosplist.service';
import { NavbarService } from 'src/app/services/navbar.service';
import { userObj } from 'src/app/userClass';
import { UserService } from 'src/app/services/user.service';
@Component({
  selector: 'app-addpatient',
  templateUrl: './addpatient.component.html',
  styleUrls: ['./addpatient.component.css']
})
export class AddpatientComponent implements OnInit {
  currP = new PatientObj();
  //Co-Morbidity checks
  cMorbHyp: boolean;
  cMorbDM: boolean;
  cMorbIHD: boolean;
  cMorbE: boolean;
  SelectedCMorbOther: boolean;
  //Complication checks
  CompIns: boolean;
  CompInf: boolean;
  CompAD: boolean;
  CompDC: boolean;
  SelectedCompOther: boolean;
  //Dialysis Comp checks
  DCHA: boolean;
  DCHypot: boolean;
  DCHypog: boolean;
  DCHyper: boolean;
  DCMC: boolean;
  DCAC: boolean;
  DCV: boolean;
  DCSZ: boolean;
  DCHS: boolean;
  DCIH: boolean;
  SelectedDCOther: boolean;
  hospitalList: String[];
  countryList: String [] = [
    "Saudi",
    "Non-saudi"
  ]

 /* countryList: String[] = ["Saudi Arabia",
    "Afghanistan",
    "Albania",
    "Algeria",
    "Andorra",
    "Angola",
    "Antigua & Deps",
    "Argentina",
    "Armenia",
    "Australia",
    "Austria",
    "Azerbaijan",
    "Bahamas",
    "Bahrain",
    "Bangladesh",
    "Barbados",
    "Belarus",
    "Belgium",
    "Belize",
    "Benin",
    "Bhutan",
    "Bolivia",
    "Bosnia Herzegovina",
    "Botswana",
    "Brazil",
    "Brunei",
    "Bulgaria",
    "Burkina",
    "Burundi",
    "Cambodia",
    "Cameroon",
    "Canada",
    "Cape Verde",
    "Central African Rep",
    "Chad",
    "Chile",
    "China",
    "Colombia",
    "Comoros",
    "Congo",
    "Costa Rica",
    "Croatia",
    "Cuba",
    "Cyprus",
    "Czech Republic",
    "Denmark",
    "Djibouti",
    "Dominica",
    "Dominican Republic",
    "East Timor",
    "Ecuador",
    "Egypt",
    "El Salvador",
    "Equatorial Guinea",
    "Eritrea",
    "Estonia",
    "Ethiopia",
    "Fiji",
    "Finland",
    "France",
    "Gabon",
    "Gambia",
    "Georgia",
    "Germany",
    "Ghana",
    "Greece",
    "Grenada",
    "Guatemala",
    "Guinea",
    "Guinea-Bissau",
    "Guyana",
    "Haiti",
    "Honduras",
    "Hungary",
    "Iceland",
    "India",
    "Indonesia",
    "Iran",
    "Iraq",
    "Ireland",
    "Israel",
    "Italy",
    "Ivory Coast",
    "Jamaica",
    "Japan",
    "Jordan",
    "Kazakhstan",
    "Kenya",
    "Kiribati",
    "North Korea",
    "South Korea",
    "Kosovo",
    "Kuwait",
    "Kyrgyzstan",
    "Laos",
    "Latvia",
    "Lebanon",
    "Lesotho",
    "Liberia",
    "Libya",
    "Liechtenstein",
    "Lithuania",
    "Luxembourg",
    "Macedonia",
    "Madagascar",
    "Malawi",
    "Malaysia",
    "Maldives",
    "Mali",
    "Malta",
    "Marshall Islands",
    "Mauritania",
    "Mauritius",
    "Mexico",
    "Micronesia",
    "Moldova",
    "Monaco",
    "Mongolia",
    "Montenegro",
    "Morocco",
    "Mozambique",
    "Myanmar",
    "Namibia",
    "Nauru",
    "Nepal",
    "Netherlands",
    "New Zealand",
    "Nicaragua",
    "Niger",
    "Nigeria",
    "Norway",
    "Oman",
    "Pakistan",
    "Palau",
    "Panama",
    "Papua New Guinea",
    "Paraguay",
    "Peru",
    "Philippines",
    "Poland",
    "Portugal",
    "Qatar",
    "Romania",
    "Russian Federation",
    "Rwanda",
    "St Kitts & Nevis",
    "St Lucia",
    "Saint Vincent & the Grenadines",
    "Samoa",
    "San Marino",
    "Sao Tome & Principe",
    "Senegal",
    "Serbia",
    "Seychelles",
    "Sierra Leone",
    "Singapore",
    "Slovakia",
    "Slovenia",
    "Solomon Islands",
    "Somalia",
    "South Africa",
    "Sudan",
    "Spain",
    "Sri Lanka",
    "Suriname",
    "Swaziland",
    "Sweden",
    "Switzerland",
    "Syria",
    "Taiwan",
    "Tajikistan",
    "Tanzania",
    "Thailand",
    "Togo",
    "Tonga",
    "Trinidad & Tobago",
    "Tunisia",
    "Turkey",
    "Turkmenistan",
    "Tuvalu",
    "Uganda",
    "Ukraine",
    "United Arab Emirates",
    "United Kingdom",
    "United States",
    "Uruguay",
    "Uzbekistan",
    "Vanuatu",
    "Vatican City",
    "Venezuela",
    "Vietnam",
    "Yemen",
    "Zambia",
    "Zimbabwe"]*/



  currUser: userObj;
  createForm: FormGroup;
  constructor(private authService: UserService, private patientService: PatientService, private fb: FormBuilder, private router: Router, private _snackBar: MatSnackBar, private hosplistService: HosplistService, public nav: NavbarService) {
    this.currUser = this.authService.getLoggedUser();
    this.hospitalList = hosplistService.HospitalList;
    this.createForm = this.fb.group({
      fullName: ['', Validators.required],
      fullNameAr: [''],
      Age: ['', Validators.required],
      Height: ['', Validators.required],
      bldGrp: ['', Validators.required],
      kAllergies: ['', Validators.required],
      Hospital: [''],
      contactInfo: ['', Validators.required],
      Gender: ['', Validators.required],
      n_ID: ['', Validators.required],
      Nationality: ['', Validators.required],
      submittedBy: ['', Validators.required],
      dosDialysis: ['', Validators.required],
      oKidneyDisease: ['', Validators.required],
      otherKD: [''],
      coMorbidityOther: [''],
      previousTr: ['', Validators.required],
      prevTrGS: [''],
      fitForTr: [''],
      fitForTrReason: [''],
      potentialRDonors: ['', Validators.required],
      currentAccess: ['', Validators.required],
      cAOther: [''],
      dOfAccessCreation: ['', Validators.required],
      ComplicationOther: [''],
      previousAccess1: [''],
      previousAccess2: [''],
      previousAccess3: [''],
      previousAccess4: [''],
      Frequency: ['', Validators.required],
      Duration: ['', Validators.required],
      Dialyser: ['', Validators.required],
      antiCoag: ['', Validators.required],
      hInit: [''],
      hMaint: [''],
      LMWHval: [''],
      antiCoReason: [''],
      dryWt: ['', Validators.required],
      avgWtGain: ['', Validators.required],
      dialAdeq: ['', Validators.required],
      dCompOther: [''],
      labDate: ['', Validators.required],
      cbcHB: ['', Validators.required],
      cbcWBC: ['', Validators.required],
      cbcPlatelets: ['', Validators.required],
      chemCre: ['', Validators.required],
      chemUrea: ['', Validators.required],
      chemSod: ['', Validators.required],
      chemPot: ['', Validators.required],
      chemCal: ['', Validators.required],
      chemPhos: ['', Validators.required],
      chemAST: ['', Validators.required],
      chemALT: ['', Validators.required],
      chemAlb: ['', Validators.required],
      chemMag: ['', Validators.required],
      chemAlph: ['', Validators.required],
      chemOther: [''],
      Siron: ['', Validators.required],
      TIBC: ['', Validators.required],
      Sferitin: ['', Validators.required],
      hormPTH: ['', Validators.required],
      hormVITD: ['', Validators.required],
      hormOther: [''],
      hbsAg: ['', Validators.required],
      hcvAb: ['', Validators.required],
      hivI_II: ['', Validators.required],
      otherSer: [''],
      coagPT: ['', Validators.required],
      coagPPT: ['', Validators.required],
      coagINR: ['', Validators.required],
      cMD1: ['', Validators.required],
      cMD2: ['', Validators.required],
      cMD3: ['', Validators.required],
      cMD4: [''],
      cMD5: [''],
      cMD6: [''],
      cMD7: [''],
      cMD8: [''],
      cMD9: [''],
      cMD10: [''],
      cMD11: [''],
      cMD12: [''],
      cMD13: [''],
      cMD14: [''],
      cMD15: [''],
      cMD16: [''],
      HepBV: [''],
      HepBVDate: [''],
      InfV: [''],
      InfVDate: [''],

    });
  }
  addp() {
    this.currP.fullName = this.createForm.controls.fullName.value;
    this.currP.fullNameAr = this.createForm.controls.fullNameAr.value;
    this.currP.Age = this.createForm.controls.Age.value;
    this.currP.Height = this.createForm.controls.Height.value;
    this.currP.bldGrp = this.createForm.controls.bldGrp.value;
    this.currP.kAllergies = this.createForm.controls.kAllergies.value;
    if (this.currUser.isAdmin) {
      if(this.createForm.controls.Hospital.value) { this.currP.Hospital = this.createForm.controls.Hospital.value; }
      else
      {
        this.currP.Hospital = "Ranya";
      }
    }
    else {
      this.currP.Hospital = this.currUser.Hospital;
    }
    this.currP.contactInfo = this.createForm.controls.contactInfo.value;
    this.currP.Gender = this.createForm.controls.Gender.value;
    this.currP.n_ID = this.createForm.controls.n_ID.value;
    this.currP.Nationality = this.createForm.controls.Nationality.value;
    this.currP.submittedBy = this.createForm.controls.submittedBy.value;
    this.currP.dosDialysis = this.createForm.controls.dosDialysis.value;
    this.currP.oKidneyDisease = this.createForm.controls.oKidneyDisease.value;
    this.currP.otherKD = this.createForm.controls.otherKD.value;
    this.currP.morbHype = this.cMorbHyp;
    this.currP.morbDM = this.cMorbDM;
    this.currP.morbEpi = this.cMorbE;
    if (this.SelectedCMorbOther) {
      this.currP.coMorbOther = this.createForm.controls.coMorbidityOther.value;
    }

    this.currP.previousTr = this.createForm.controls.previousTr.value;
    this.currP.prevTrGS = this.createForm.controls.prevTrGS.value;
    this.currP.fitForTr = this.createForm.controls.fitForTr.value;
    this.currP.fitForTrReason = this.createForm.controls.fitForTrReason.value;
    this.currP.potentialRDonors = this.createForm.controls.potentialRDonors.value;
    this.currP.currentAccess = this.createForm.controls.currentAccess.value;
    this.currP.cAOther = this.createForm.controls.cAOther.value;
    this.currP.dOfAccessCreation = this.createForm.controls.dOfAccessCreation.value;
    this.currP.compInsuf = this.CompIns;
    this.currP.compInf = this.CompInf;
    this.currP.compAD = this.CompAD;
    this.currP.compDC = this.CompDC;
    if (this.SelectedDCOther) {
      this.currP.compOther = this.createForm.controls.ComplicationOther.value;
    }
    this.currP.previousAccess1 = this.createForm.controls.previousAccess1.value;
    this.currP.previousAccess2 = this.createForm.controls.previousAccess2.value;
    this.currP.previousAccess3 = this.createForm.controls.previousAccess3.value;
    this.currP.previousAccess4 = this.createForm.controls.previousAccess4.value;
    this.currP.Frequency = this.createForm.controls.Frequency.value;
    this.currP.Duration = this.createForm.controls.Duration.value;
    this.currP.Dialyser = this.createForm.controls.Dialyser.value;
    this.currP.antiCoagulation = this.createForm.controls.antiCoag.value;
    this.currP.hInit = this.createForm.controls.hInit.value;
    this.currP.hMaint = this.createForm.controls.hMaint.value;
    this.currP.LMWHval = this.createForm.controls.LMWHval.value;
    this.currP.antiCoReason = this.createForm.controls.antiCoReason.value;
    this.currP.dryWt = this.createForm.controls.dryWt.value;
    this.currP.avgWtGain = this.createForm.controls.avgWtGain.value;
    this.currP.dialAdeq = this.createForm.controls.dialAdeq.value;
    this.currP.dCompHead = this.DCHA;
    this.currP.dCompHOT = this.DCHypot;
    this.currP.dCompHG = this.DCHypog;
    this.currP.dCompHET = this.DCHyper;
    this.currP.dCompMC = this.DCMC;
    this.currP.dCompAC = this.DCAC;
    this.currP.dCompVom = this.DCV;
    this.currP.dCompSZ = this.DCSZ;
    this.currP.dCompHS = this.DCHS;
    this.currP.dCompIt = this.DCIH;
    if (this.SelectedCompOther) {
      this.currP.dCompOther = this.createForm.controls.dCompOther.value;
    }
    this.currP.labDate = this.createForm.controls.labDate.value;
    this.currP.cbcHB = this.createForm.controls.cbcHB.value;
    this.currP.cbcWBC = this.createForm.controls.cbcWBC.value;
    this.currP.cbcPlatelets = this.createForm.controls.cbcPlatelets.value;
    this.currP.chemCre = this.createForm.controls.chemCre.value;
    this.currP.chemUrea = this.createForm.controls.chemUrea.value;
    this.currP.chemSod = this.createForm.controls.chemSod.value;
    this.currP.chemPot = this.createForm.controls.chemPot.value;
    this.currP.chemCal = this.createForm.controls.chemCal.value;
    this.currP.chemPhos = this.createForm.controls.chemPhos.value;
    this.currP.chemAST = this.createForm.controls.chemAST.value;
    this.currP.chemALT = this.createForm.controls.chemALT.value;
    this.currP.chemAlb = this.createForm.controls.chemAlb.value;
    this.currP.chemMag = this.createForm.controls.chemMag.value;
    this.currP.chemAlph = this.createForm.controls.chemAlph.value;
    this.currP.chemOther = this.createForm.controls.chemOther.value;
    this.currP.Siron = this.createForm.controls.Siron.value;
    this.currP.TIBC = this.createForm.controls.TIBC.value;
    this.currP.Sferitin = this.createForm.controls.Sferitin.value;
    this.currP.hormPTH = this.createForm.controls.hormPTH.value;
    this.currP.hormVITD = this.createForm.controls.hormVITD.value;
    this.currP.hormOther = this.createForm.controls.hormOther.value;
    this.currP.hbsAg = this.createForm.controls.hbsAg.value;
    this.currP.hcvAb = this.createForm.controls.hcvAb.value;
    this.currP.hivI_II = this.createForm.controls.hivI_II.value;
    this.currP.othrSer = this.createForm.controls.otherSer.value;
    this.currP.coagPT = this.createForm.controls.coagPT.value;
    this.currP.coagPPT = this.createForm.controls.coagPPT.value;
    this.currP.coagINR = this.createForm.controls.coagINR.value;
    this.currP.cMD1 = this.createForm.controls.cMD1.value;
    this.currP.cMD2 = this.createForm.controls.cMD2.value;
    this.currP.cMD3 = this.createForm.controls.cMD3.value;
    this.currP.cMD4 = this.createForm.controls.cMD4.value;
    this.currP.cMD5 = this.createForm.controls.cMD5.value;
    this.currP.cMD6 = this.createForm.controls.cMD6.value;
    this.currP.cMD7 = this.createForm.controls.cMD7.value;
    this.currP.cMD8 = this.createForm.controls.cMD8.value;
    this.currP.cMD9 = this.createForm.controls.cMD9.value;
    this.currP.cMD10 = this.createForm.controls.cMD10.value;
    this.currP.cMD11 = this.createForm.controls.cMD11.value;
    this.currP.cMD12 = this.createForm.controls.cMD12.value;
    this.currP.cMD13 = this.createForm.controls.cMD13.value;
    this.currP.cMD14 = this.createForm.controls.cMD14.value;
    this.currP.cMD15 = this.createForm.controls.cMD15.value;
    this.currP.cMD16 = this.createForm.controls.cMD16.value;
    this.currP.HepBV = this.createForm.controls.HepBV.value;
    this.currP.HepBVDate = this.createForm.controls.HepBVDate.value;
    this.currP.InfV = this.createForm.controls.InfV.value;
    this.currP.InfVDate = this.createForm.controls.InfVDate.value;
    this._snackBar.open("Medical record added successfully", "", {
      duration: 2000,
    });
    this.patientService.addPatient(this.currP).subscribe(() => {
      this.router.navigate(['/list']);
    });
  }
  ngOnInit(): void {
    this.nav.show();
    this.createForm.controls.oKidneyDisease.setValue("Unknown");
    this.createForm.controls.previousTr.setValue("No");
    this.createForm.controls.fitForTr.setValue("Yes");
    this.createForm.controls.currentAccess.setValue("AVF/Side/Rt.");
    this.createForm.controls.antiCoag.setValue("No");
    this.SelectedCMorbOther = false;
    this.cMorbDM = false;
    this.cMorbE = false;
    this.cMorbHyp = false;
    this.cMorbIHD = false;
    this.CompIns = false;
    this.CompInf = false;
    this.CompAD = false;
    this.CompDC = false;
    this.SelectedCompOther = false;
    this.DCHA = false;
    this.DCHypot = false;
    this.DCHypog = false;
    this.DCHyper = false;
    this.DCMC = false;
    this.DCAC = false;
    this.DCV = false;
    this.DCSZ = false;
    this.DCHS = false;
    this.DCIH = false;
    this.SelectedDCOther = false;

  }

}
