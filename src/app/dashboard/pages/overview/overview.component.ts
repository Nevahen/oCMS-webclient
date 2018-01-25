import { Component, OnInit } from '@angular/core';
import { PageService } from '../../../page.service';
import { Router } from '@angular/router';
import { pages } from '../../../../mockdata/mockpages';

@Component({
  selector: 'pages-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class PagesOverviewComponent implements OnInit {

  pages;
  selectedPages;

  constructor(
    private pageService:PageService,
    private router:Router) { }

  ngOnInit() {


  this.pageService
  .GetAllPages().subscribe(data =>{
    this.pages = data
  });

}

  getSelectedPages(){
   var tmpArray = [];

    for(let page of this.pages){
      if(page.checked){
        tmpArray.push(page);
      }
    };
    
    console.log(this.selectedPages)
    this.selectedPages = tmpArray.length;
  }

  selectAll(){

    for(let page of this.pages){
      page.checked = true;
    }

    this.getSelectedPages();
  }

  deselectAll(){

    for(let page of this.pages){
      page.checked = false;
    }

    this.getSelectedPages();
  }
}
