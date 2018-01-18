import { Injectable } from '@angular/core';
import { pages } from '../mockdata/mockpages'
import { DomSanitizer } from '@angular/platform-browser/';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { Router } from '@angular/router';
import { forEach } from '@angular/router/src/utils/collection';
@Injectable()
export class PageService {


  errorpage = pages.errorpage;


  constructor(
    private sanitazer: DomSanitizer,
    private router:Router
  ) { }

  GetPage(str:string):Observable<any>{
      if(pages[str]){
        return Observable.of(pages[str]);
      }else{
        return Observable.of(this.errorpage);
      }
  }

  GetPageTitles(){

    let result = [];

    for(let page in pages){
      result.push(page);
    }
    console.log(result);
    return result;
    
  }


}
