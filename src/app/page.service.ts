import { Injectable } from '@angular/core';
import { pages } from '../mockdata/mockpages'
import { DomSanitizer } from '@angular/platform-browser/';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { Router } from '@angular/router';
import { forEach } from '@angular/router/src/utils/collection';
import { Page } from './_models/page';
@Injectable()
export class PageService {


  errorpage = "errorpage";
  i = 0;


  constructor(
    private sanitazer: DomSanitizer,
    private router:Router
  ) { }

  GetPage(str:string):Observable<Page>{
    this.i++;
    console.log(this.i);
      if(pages[str]){
        return Observable.of(pages[str]);
      }else{
        return Observable.of(pages[this.errorpage]);
      }
  }

  GetPageTitles(){

    let result = [];

    for(let page in pages){
      result.push(page);
    }
    return result;    
  }
}
