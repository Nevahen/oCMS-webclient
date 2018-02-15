import { Component, OnInit, Input,Output, EventEmitter } from '@angular/core';
import { NavItem } from '../../../../models/navitem';

@Component({
  selector: 'menuitem-selector',
  templateUrl: './menuitem-selector.component.html',
  styleUrls: ['./menuitem-selector.component.scss']
})
export class MenuitemSelectorComponent implements OnInit {

  constructor() { }
  name:string;
  target:number;

  @Input() index;
  @Input() data;
  @Input() pageData;

  @Output() deleteThis = new EventEmitter();


  onDeleteThis(){
    this.deleteThis.emit(this.index);
  }
  
  ngOnInit() {
  }
}
