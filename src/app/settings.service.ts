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
    return this.http.get('/api/settings/key/' + key);
  }

  /*
  
  */
  GetMultipleSettings(keys:Array<string>):Observable<any>{

    return;
  }

  SetSetting(key,value){

    let settingData = {
      setting_key: key,
      setting_value: value
    }

    return this.http.put('/api/settings', settingData);
  }

  SetMultipleSettings(){

  }

}
