import { Injectable } from '@angular/core';
import { CanActivate,CanLoad,Route } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Promise } from 'q';
import { Router } from '@angular/router/';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(
    private router:Router,
    private http:HttpClient
  ) { }

  canActivate(){

    if(localStorage.getItem('token')){
      return true; 
    }
    
    this.router.navigate(['dashboard/login']);
    return false;
  }

  getToken(): string{
    return localStorage.getItem('token');
  }

  setToken(token:string){
    localStorage.setItem('token', token)
  }

  private tryLogin(username:string, password:string){
    let body = {
      username:username,
      password:password
    }
    return this.http.post('/api/auth/', body).toPromise()
  }

  /**
   * 
   * 
   * @param {string} username 
   * @param {string} password 
   * @returns Success or Error response. Sets token into localstorage. Key: token
   * @memberof AuthGuardService
   */
  login(username:string, password:string){
    return Promise((resolve, reject) => {

      this.tryLogin(username, password)
        .then((response:any) =>  {
          resolve(response)
          //Set token to localstorage
          this.setToken(response.token)
          /* Lazy loaded modules for some doesn't like to navigate without breakin things,
          *  so we are navigating to dashboard from here for now.
          */
          setTimeout(() =>{
            this.router.navigate(['./dashboard'])
          }, 2000)
        })
        .catch(err =>{
          reject(err.error)
      })
    })
  }

  LogOut(){
    localStorage.removeItem('token');
    this.router.navigate(['dashboard/login']);
    console.log("logged out"); 
  }



}