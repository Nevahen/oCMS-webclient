import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { AuthGuardService } from '../../auth-guard.service';
import { ViewEncapsulation } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'dashboard-login',
  templateUrl: './dashboard-login.component.html',
  styleUrls: ['./dashboard-login.component.scss']  
})
export class DashboardLoginComponent implements OnInit {

  constructor(
    private authGuard: AuthGuardService,
    private ref: ChangeDetectorRef,
    private router:Router,

  ) { }

  ngOnInit() {

    this.router.onSameUrlNavigation = 'reload';

  }

  errors = [];
  success = false;

  model = {
    name:null,
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

 this.authGuard.login(this.model.name,this.model.password)
  .then((response:any) =>  {
      this.success = true;
    })
  .catch(err => {
    this.errors.push(<string>err.error.message)
    console.log(err.error.message)
    console.log(err)
    })
  }

}
