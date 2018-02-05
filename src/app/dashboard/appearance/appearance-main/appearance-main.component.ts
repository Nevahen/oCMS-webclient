import { Component, OnInit } from '@angular/core';
import { users} from '../../../../mockdata/mockusers';

@Component({
  selector: 'app-appearance-main',
  templateUrl: './appearance-main.component.html',
  styleUrls: ['./appearance-main.component.scss']
})
export class AppearanceMainComponent implements OnInit {


  userData = users;

  constructor() { }

  ngOnInit() {
  }

}
