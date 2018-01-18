import { Injectable } from '@angular/core';
import { CanActivate,CanLoad,Route } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Promise } from 'q';
import { Router } from '@angular/router/';


@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(private router:Router) { }

  canActivate(){

    

    let allowed = false;
    if(localStorage.getItem('canLogin') == "true"){
      return true; 
    }
    this.router.navigate(['dashboard/login']);
    return false;
  }

  /**
   * Mock LogIn function
   * 
   * @memberof AuthGuardService
   */
  LogIn(){
    localStorage.setItem('canLogin',"true");
    setTimeout( () => {
      this.router.navigate(['dashboard']);
     },1000)
    
  }

  /**
   * Mock Logout function
   * 
   * @memberof AuthGuardService
   */
  LogOut(){
    localStorage.setItem('canLogin',"false");
    this.router.navigate(['dashboard/login']);
    console.log("logged out"); 
  }



}