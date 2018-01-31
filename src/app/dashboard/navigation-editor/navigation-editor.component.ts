import { Component, OnInit } from '@angular/core';
import { PageService } from '../../page.service';
import { NavItem } from '../../../models/navitem';

@Component({
  selector: 'navigation-editor',
  templateUrl: './navigation-editor.component.html',
  styleUrls: ['./navigation-editor.component.scss']
})
export class NavigationEditorComponent implements OnInit {

  constructor(
    private pageService:PageService
  ) {}

  ngOnInit() {
    this.getPages();
  }

  pageData;

  navData = {
    mainpage:null,
    errorpage:null,
    nav_items:[]
  };

  onAddMenuItem(){

    let navItem = new NavItem();
    navItem.name = null;
    navItem.target = null;

    this.navData.nav_items.push(navItem);
    console.log(this.navData);
  }

  onNavItemChange(value){
    this.updateNavData(value.index, value.navItem);
  }

  updateNavData(index,data:NavItem){
    // FIX ME: Resets menuitems when updating.. 
      this.navData.nav_items[index].name =  data.name;
      this.navData.nav_items[index].target =  data.target;
      console.log(this.navData.nav_items);
  }


  getPages(){
    this.pageService.GetAllPages()
    .subscribe(data =>{
      this.pageData = data;
    })
  }

}
