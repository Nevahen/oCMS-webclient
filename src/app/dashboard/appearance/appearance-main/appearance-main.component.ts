import { Component, OnInit } from '@angular/core';
import { users} from '../../../../mockdata/mockusers';
import { Appearance } from './appearance-model';
import { SettingsService } from '../../../settings.service';

@Component({
  selector: 'app-appearance-main',
  templateUrl: './appearance-main.component.html',
  styleUrls: ['./appearance-main.component.scss']
})
export class AppearanceMainComponent implements OnInit {
  constructor(
    private settingsService: SettingsService
  ) { }

  appearanceData:Appearance = new Appearance();
  message = ""
  messageShow = false;

  ngOnInit() {
    
    this.settingsService.GetSetting("site_name")
    .subscribe(x => {
      this.appearanceData.site_name = x.setting_value;
    })

    this.settingsService.GetSetting("site_description")
    .subscribe(x => {
      this.appearanceData.site_description = x.setting_value;
    })

    console.log(this.appearanceData)
  }

  onSubmit(){

    let keys = Object.getOwnPropertyNames(this.appearanceData)
    console.log(keys)

    keys.forEach(prop => {
      this.settingsService.SetSetting(prop, this.appearanceData[prop])
      .subscribe(response => {
        console.log(response)
        console.log("ok")
        if(response['statuscode'] === 200){
          this.message = "Settings saved successfully"
          this.messageShow = true;
        }
        setTimeout(() => {
          this.messageShow = false;
        }, 4000);
      })
    })
  }
}
