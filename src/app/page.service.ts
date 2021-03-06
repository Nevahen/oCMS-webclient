import { Injectable } from '@angular/core';
import { pages } from '../mockdata/mockpages'
import { DomSanitizer } from '@angular/platform-browser/';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { Router } from '@angular/router';
import { forEach } from '@angular/router/src/utils/collection';
import { Page } from '../models/page';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EditMode } from '../models/editmode';
import { NavService } from './navigation.service';
import * as errorpage from './misc/errorpage.json'
import { reject, resolve } from 'q';


@Injectable()
export class PageService {

  constructor(
    private sanitazer: DomSanitizer,
    private router: Router,
    private http: HttpClient,
    private navService: NavService
  ) { }


  GetPage(str: string): Promise<any> {

    return new Promise((resolve, reject) =>{
      this.http.get('/api/pages/' + str)
      .subscribe(result => {

        if(result["error"]){
          reject(errorpage)
        
        }
        // Api returns array, so need to pass first element
        resolve(result[0]);
      })
    })
  }

  DeleteMultiplePages(pages: Array<number>) {

    let promiseArr = []
    
    pages.forEach(x => {
      promiseArr.push(this.DeletePageByID(x))
    })
  
    return Promise.all(promiseArr)
  }


  DeletePageByID(id: number) {

    return this.http.delete('/api/pages/' + id)
      .toPromise()

  }

  GetPageByID(id: number): Observable<Page> {

    return this.http.get<Page>('/api/pages/' + id);

  }

  GetMainPage() {

    return this.navService.getMainPage()
      .then(pageid => {
        return this.http.get<Page>('/api/pages/' + pageid);
      })

  }

  GetAllPages(): Observable<Page> {

    return this.http.get<Page>('/api/pages/');

  };

  UpdatePage(page, editmode: EditMode) {

    const body = JSON.stringify(page);

    switch (editmode) {
      case EditMode.EDIT_PAGE:
        return this.http.put('/api/pages', body, { headers: { 'Content-Type': 'application/json' } })
          .toPromise()
          .then((response: any ) =>{
            if(response.statuscode === 200){
              return response
            }
          });
      case EditMode.NEW_PAGE:
        return this.http.post('/api/pages', body, { headers: { 'Content-Type': 'application/json' } }).toPromise()
        .then((response: any ) =>{
          if(response.statuscode === 200){
            return response
          }
        });;
    }

  }

  GetPageTitles() {

    let result = [];

    for (let page in pages) {
      result.push(page);
    }
    return result;
  }
}
