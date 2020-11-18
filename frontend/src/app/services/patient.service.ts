import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { PatientObj } from '../patientClass';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  uri = 'http://localhost:4000';

  constructor(private http: HttpClient) { }


  getPatientsbyHosp(Hospital: String) {
    return this.http.post(`${this.uri}/patients/Hospital`,{Hospital: Hospital});
  }
  getPatientById(id: any) {

    return this.http.get(`${this.uri}/patients/${id}`);

  }
  getPatientbyfullNameAr(fullNameAr: any)
  {
    return this.http.post(this.uri +'/patients/fullNameAr/', {fullNameAr: fullNameAr});

  }

  getPatientbynID(n_ID: any) {
    return this.http.post(this.uri +'/patients/n_ID/',{n_ID: n_ID});
  }

  getPatientbyContact(contactInfo: any)
  {
    return this.http.get(`${this.uri}/patients/${contactInfo}`);
  }

  addPatient(pCurrent= new PatientObj()) {
    return this.http.post(`${this.uri}/patients/add`,pCurrent);
  }
  updatePatient(id:any, pCurrent = new PatientObj()) {
    return this.http.post(`${this.uri}/patients/update/${id}`,pCurrent);
  }
  deletePatient(id: any) {
    return this.http.get(`${this.uri}/patients/delete/${id}`);
  }

}
