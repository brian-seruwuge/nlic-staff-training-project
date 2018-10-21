import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TrainingService {
  staff=[
    {Title:'Mr', Name:'Kambugu William', Department:'Administration'},
    {Title:'Mr', Name:'Solomon Ruzima', Department:'Security'},
    {Title:'Mr', Name:'Onyu Lenin', Department:'Security'},
    {Title:'Mr', Name:'Opio Joseph', Department:'Testing'},
    {Title:'Ms', Name:'Nakayenga Gertrude', Department:'Testing'},
    {Title:'Ms', Name:'Aisha Sainah', Department:'Testing'},
    {Title:'Mr', Name:'Alani Jimmy', Department:'Development'},
    {Title:'Mr', Name:'Mivule Joseph', Department:'Development'},
    {Title:'Mr', Name:'Sseruwugge Brian', Department:'Development'},
    {Title:'Mr', Name:'Nanjubu Felix', Department:'Development' },
    {Title:'Mr', Name:'Orimwesiga Preston', Department:'Development'},
    {Title:'Mr', Name:'Muwanguzi Earnest', Department:'Development'},
    {Title:'Mr', Name:'Daniel Muwanguzi', Department:'Hardware/support'},
    {Title:'Mr', Name:'Wycliff Kayombya', Department:'Hardware/support'},
    {Title:'Mr', Name:'Ssemwanga Andrew', Department:'Hardware/support'},
    {Title:'Ms', Name:'Nakato Deborah', Department:'Hardware/support'},
    {Title:'Mr', Name:'Ivan Tumwesige', Department:'Hardware/support'},
    {Title:'Mr', Name:'Nassolo Sylivia', Department:'Hardware/support'},
    {Title:'Mr', Name:'Kalule Baker', Department:'Hardware/support'},
    {Title:'Mr', Name:'Musa', Department:'Hardware/support'},
    {Title:'Mr', Name:'Ronald', Department:'Hardware/support'},
  ]
  constructor() { }

  getStaff(){
  return this.staff;
  }
}

