import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AuthGuardService } from '../auth-guard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DashboardComponent implements OnInit {

  constructor(private authGuard: AuthGuardService) { }

  ngOnInit() {
  }

  logOut(){
    this.authGuard.LogOut();
   
  }

}
