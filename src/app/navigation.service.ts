import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class NavService {

  navData = {}
  mainpage;
  errorpage;

  constructor(private http: HttpClient) {
    this.http.get('/api/settings/key/mainpage').subscribe(resp => {
      this.mainpage = resp['setting_value'];
    })

    this.http.get('/api/settings/key/errorpage').subscribe(resp => {
      this.errorpage = resp['setting_value'];
    })

  }

  getMainPage(): Promise<any> {
    return new Promise((resolve, reject) => {

      if (this.mainpage != null) {
        resolve(this.mainpage)
      }
      else {
        this.http.get('/api/settings/key/mainpage').subscribe(resp => {
          let pageid = resp['setting_value'];
          this.mainpage = pageid;
          resolve(pageid)
        })
      }
    })
  }

  getErrorPage(): Promise<any> {
    return new Promise((resolve, reject) => {

      if (this.mainpage != null) {
        resolve(this.mainpage)
      }
      else {
        this.http.get('/api/settings/key/errorpage').subscribe(resp => {
          let pageid = resp['setting_value'];
          this.errorpage = pageid;
          resolve(pageid)
        })
      }
    })
  }

  GetNavData() {
    return this.http.get('/api/settings/key/nav_items');
  }
}
