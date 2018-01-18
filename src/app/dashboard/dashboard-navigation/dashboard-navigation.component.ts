import { Component, OnInit } from '@angular/core';
import { AuthGuardService } from '../../auth-guard.service';

@Component({
  selector: 'dashboard-navigation',
  templateUrl: './dashboard-navigation.component.html',
  styleUrls: ['./dashboard-navigation.component.scss']
})
export class DashboardNavigationComponent implements OnInit {

  constructor(private authGuard: AuthGuardService) { }

  ngOnInit() {
  }

  logOut(){
    this.authGuard.LogOut();   
  }


}
