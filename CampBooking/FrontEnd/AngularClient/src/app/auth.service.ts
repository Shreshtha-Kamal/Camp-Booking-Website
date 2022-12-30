import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
  IsUserLoggedin(){
    return localStorage.getItem('token')
  }

  logout(){
    localStorage.setItem('isLoggedIn','false');    
    localStorage.removeItem('token');
  }

}
