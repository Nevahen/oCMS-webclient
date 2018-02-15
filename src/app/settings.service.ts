import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs/Observable';


@Injectable()
export class SettingsService {

  constructor(
    private router:Router,
    private http: HttpClient
  ) { }

  GetSetting(key:string):Observable<any>{

    return
  }

  /*
  
  */
  GetMultipleSettings(keys:Array<string>):Observable<any>{

    return;
  }

  SetSetting(key,value){

  }

  SetMultipleSettings(){
    
  }

}
