import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HosplistService {

  HospitalList: String[] = [
    "Ranya",
    "Al-Kharma",
    "Tarabah",
    "Zalm",
    "Al-Moya",
    "Al-Gare",
    "Missan",
    "Guia",
    "Al-Sahn",
    "King Abdulaziz Speicalist Hospital",
    "King Faisal Medical Complex"
  ]
addHosp(newHospital: String)
{
  this.HospitalList.push(newHospital);
}
removeHosp(newHospital: String)
{
  this.HospitalList = this.HospitalList.filter(e => e !== newHospital);
}
  constructor() { }
}
