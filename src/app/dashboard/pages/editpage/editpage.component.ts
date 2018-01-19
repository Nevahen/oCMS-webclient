import { Component, OnInit } from '@angular/core';
import { PageService } from '../../../page.service';
import { ActivatedRoute,Router } from '@angular/router/';
import { Page} from '../../../_models/page';
import { promise, Navigation } from 'selenium-webdriver';
import { resolve } from 'path';
import { reject } from 'q';
import { Observable } from 'rxjs/Observable';
import { RouterEvent } from '@angular/router';
import { NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-editpage',
  templateUrl: './editpage.component.html',
  styleUrls: ['./editpage.component.scss']
})
export class EditpageComponent implements OnInit {

  constructor(
    private pageService:PageService,
    private route:ActivatedRoute,
    private router:Router
  ) { }

  pageData:Observable<Page>;

  ngOnInit() {
    this.router.events
    // We want to check if route changes when we are editing, so we can update the view
    .subscribe(event => {
      if(event instanceof NavigationEnd){
      this.getPageData();
      }
    });
  this.getPageData();
  }

  private getPageData(){
    let tmp = this.pageService
    .GetPage(this.route.snapshot.paramMap.get('page'));
    this.pageData = tmp;
   
  }
}
  

