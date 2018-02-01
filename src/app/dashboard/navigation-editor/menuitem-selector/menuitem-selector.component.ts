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
  @Input() pageData;

  @Output() onNavItemChange = new EventEmitter();
  @Output() deleteThis = new EventEmitter();


  onDeleteThis(){
    this.deleteThis.emit(this.index);
  }
  // Emit changes when value is being changed
  onChange(value, type){  

    if(type == "name"){
      this.name = value;
    }
    
    if(type == "target"){
      this.target = value;
    }

    // Maybe change this to class constructor instead of making 'custom object'
    let navItem:NavItem = {
      name:this.name,
      target:this.target,
      children:[]
    }

    // Data to emit
    let data = {
      index:this.index,
      navItem:navItem
    }

    this.onNavItemChange.emit(data);
  }

  ngOnInit() {
  }
}
