import { Component, OnInit } from '@angular/core';
import { AuthGuardService } from '../../auth-guard.service';


@Component({
  selector: 'dashboard-login',
  templateUrl: './dashboard-login.component.html',
  styleUrls: ['./dashboard-login.component.scss'],
  
})
export class DashboardLoginComponent implements OnInit {

  constructor(private authGuard: AuthGuardService) { 

    
    
  }

  ngOnInit() {
  }

  errors = [];
  success = false;

model={name:null,
       password:null
      }

onSubmit(){
  
  this.errors = []

  if(!this.model.name){
    this.errors.push("Name cannot be empty!");
  }


  if(!this.model.password){
   this.errors.push("Please enter password!");
   return;
  }

  if(this.model.name == "admin" && this.model.password == "admin"){
    this.success = true;
    this.authGuard.LogIn();
    return
  }

  this.errors.push("Invalid login name or password");

}

}
