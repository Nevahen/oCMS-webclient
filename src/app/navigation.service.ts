import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class NavService {

  navData = {}

  constructor(
    private http: HttpClient
  ) {}


  GetNavData(){
    return this.http.get('/api/settings/key/nav_items');
  }
}
