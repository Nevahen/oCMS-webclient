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
          localStorage.setItem("token", response.token)
          this.router.navigate(['./dashboard'])
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