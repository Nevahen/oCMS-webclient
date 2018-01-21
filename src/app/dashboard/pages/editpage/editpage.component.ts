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
    private zone:NgZone
  ) { }

  classes = {
    'alert-success': true
  }

  pageData;
  isSaving:boolean = false;
  showPopup = false;
  
  ngOnInit() {
    this.router.events
    // We want to check if route changes when we are editing, so we can update the view
    .subscribe(event => {
      if(event instanceof NavigationEnd){
      this.getPageData();
      }
    });
  
  this.getPageData();
  }

  private getPageData(){
     this.pageService
      .GetPageByID(this.route.snapshot.params.page).subscribe(data =>{
      this.pageData = data[0];
    })    
  }

  
/**
 * TODO: Make alert service and remove popup logic from here.
 * 
 * @private
 * @memberof EditpageComponent
 */
private updatePage(){

    this.isSaving = true;
    this.showPopup = true;

    this.pageService.UpdatePage(this.pageData)
    .subscribe(response =>{
      
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
    })
  }
}  

