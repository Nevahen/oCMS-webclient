import { Injectable } from '@angular/core';
import { pages } from '../mockdata/mockpages'
import { DomSanitizer } from '@angular/platform-browser/';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
@Injectable()
export class PageService {


  mainpage = pages.mainpage;


  constructor(
    private sanitazer: DomSanitizer
  ) { }

  GetPage(str:string):Observable<any>{
      if(pages[str]){
        return Observable.of(pages[str]);
      }else{
        return Observable.of(this.mainpage);
      }
  }


}
