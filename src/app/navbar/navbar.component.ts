import { Component, OnInit } from '@angular/core';
import { mocknav } from '../../mockdata/mocknav';
import { NavService } from '../navigation.service';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html'})
export class NavbarComponent implements OnInit {

  navItems;

  constructor(
   private navService:NavService
  ) { }

  ngOnInit() {

    this.navService.GetNavData()
    .subscribe(data =>{
      this.navItems = JSON.parse(data["setting_value"]);
    })

  }


  



}
