import { Component, OnInit, NgZone,Input } from '@angular/core';
import { PageService } from '../../../page.service';
import { ActivatedRoute,Router } from '@angular/router/';
import { Page} from '../../../_models/page';
import { promise, Navigation } from 'selenium-webdriver';
import { reject } from 'q';
import { Observable } from 'rxjs/Observable';
import { RouterEvent } from '@angular/router';
import { NavigationEnd } from '@angular/router';
import { pages } from '../../../../mockdata/mockpages';
import { Title } from '@angular/platform-browser';
import { EditMode } from '../../../_models/editmode';

@Component({
  selector: 'app-editpage',
  templateUrl: './editpage.component.html',
  styleUrls: ['./editpage.component.scss']
})
export class EditpageComponent implements OnInit {

 
  constructor(
    private pageService:PageService,
    private route:ActivatedRoute,
    private router:Router,
    private zone:NgZone,
    private title:Title
  ) { }

  classes = {
    'alert-success': true
  }

  pageData;
  isSaving:boolean = false;
  showPopup = false;
  mode:EditMode;

  ngOnInit() {
  if(this.route.snapshot.params.page){
  this.getPageData();
  this.mode = EditMode.EDIT_PAGE;
  }
  else{
    this.pageData = {}
    this.mode = EditMode.NEW_PAGE;    
  }

  }

  private getPageData(){
     this.pageService
      .GetPageByID(this.route.snapshot.params.page).subscribe(data =>{
      this.pageData = data[0];
      // Set windows title
      this.title.setTitle("oCMS Dashboard - Edit page - " + this.pageData.title);
    })    
  }

  private onSubmit(){

    this.updatePage();

  }
  
/**
 * TODO: Make alert service and remove popup logic from here.
 * 
 * @private
 * @memberof EditpageComponent
 */
private updatePage(){

    this.isSaving = true;

    this.pageService.UpdatePage(this.pageData,this.mode)
    .subscribe(response =>{
      this.showPopup = true;

      if(response.statuscode == 200){
          
        this.zone.run(() => {
          setTimeout(()=>{  
            this.isSaving = false;
          },1000);     
        })

        this.zone.run(() => {
          setTimeout(()=>{  
            this.showPopup = false;
          },3000);     
        })
      }
      else{
        // Handle API Error here
      }
    })
  }
}  

