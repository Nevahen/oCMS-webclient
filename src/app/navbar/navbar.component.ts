import { Component, OnInit } from '@angular/core';
import { mocknav } from '../../mockdata/mocknav';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  navItems = mocknav ;

  constructor() { }

  ngOnInit() {
  }


  



}
