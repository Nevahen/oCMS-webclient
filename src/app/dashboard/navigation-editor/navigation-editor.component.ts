import { Component, OnInit } from '@angular/core';
import { PageService } from '../../page.service';

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


  getPages(){
    this.pageService.GetAllPages()
    .subscribe(data =>{
      this.pageData = data;
    })
  }

}
