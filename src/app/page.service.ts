import { Injectable } from '@angular/core';
import { pages } from '../mockdata/mockpages'
import { DomSanitizer } from '@angular/platform-browser/';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { Router } from '@angular/router';
import { forEach } from '@angular/router/src/utils/collection';
import { Page } from '../models/page';
import { HttpClient } from '@angular/common/http';
import { EditMode } from '../models/editmode';


@Injectable()
export class PageService {


  errorpage = "errorpage";


  constructor(
    private sanitazer: DomSanitizer,
    private router:Router,
    private http: HttpClient
  ) { }

  GetPage(str:string):Observable<Page>{
      if(pages[str]){
        return Observable.of(pages[str]);
      }else{
        return Observable.of(pages[this.errorpage]);
      }
  }

  DeleteMultiplePages(pages:Array<number>){

    return new Promise((resolve,reject) =>{
        for(let i of pages){
          this.DeletePageByID(i)
          .then(v =>{
          })
          resolve();
        }        
    })
  }


  DeletePageByID(id:number){

    return this.http.delete('/api/pages/' + id)
    .toPromise()
  
  }

  GetPageByID(id:number):Observable<Page>{

    return this.http.get<Page>('/api/pages/' + id);
  
  }

  GetAllPages():Observable<Page>{

    return this.http.get<Page>('/api/pages/');

  };

  UpdatePage(page,editmode:EditMode):Observable<any>{
    
    const body = JSON.stringify(page);

    switch(editmode)
    {
      case EditMode.EDIT_PAGE:
    return this.http.put('/api/pages',body,{headers:{'Content-Type': 'application/json'}});
      case EditMode.NEW_PAGE:
    return this.http.post('/api/pages',body,{headers:{'Content-Type': 'application/json'}});
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
