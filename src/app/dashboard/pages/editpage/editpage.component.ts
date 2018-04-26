import { Component, OnInit, NgZone,Input, ElementRef } from '@angular/core';
import { PageService } from '../../../page.service';
import { ActivatedRoute,Router } from '@angular/router/';
import { Page} from '../../../../models/page';
import { promise, Navigation } from 'selenium-webdriver';
import { reject, resolve } from 'q';
import { Observable } from 'rxjs/Observable';
import { RouterEvent } from '@angular/router';
import { NavigationEnd } from '@angular/router';
import { pages } from '../../../../mockdata/mockpages';
import { Title } from '@angular/platform-browser';
import { EditMode } from '../../../../models/editmode';
import { PageValidator } from '../../../../_shared/pagevalidator';
import * as ToolbarFunctions from '../../../../toolbarfunctions';

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

  
  pageData;
  isSaving:boolean = false;
  errors:Array<string>;
  showPopup = false;
  mode:EditMode;
  hostname;

  ngOnInit() {
    this.hostname = window.location.hostname;
  if(this.route.snapshot.params.page){
    this.getPageData();
    this.mode = EditMode.EDIT_PAGE;
  }
  else{
    this.pageData = {}
    this.pageData.tags = [];
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

  private onTagEnter(e){
    // If enter and not null
    if(e.key == "Enter" && e.target.value != ""){

    // Split tags to array
    let tmpArr = e.target.value.split(',')
    // Merge new tags with existing tags TODO: No duplicates thx.
    this.pageData.tags = this.pageData.tags.concat(tmpArr);

    // Clear input
    e.target.value = "";

    }
  }

  private onTagClick(index){
    this.pageData.tags.splice(index, 1);
  }

  private handleToolbarClick(op){
    let textArea = document.getElementById('textArea');
    this.pageData.content = ToolbarFunctions.doOperation(op,this.pageData.content, textArea)
  }

  
/**
 * TODO: Make alert service and remove popup logic from here.
 * 
 * @private
 * @memberof EditpageComponent
 */
private updatePage(){

  let pageValidator = new PageValidator();

  pageValidator.validate(this.pageData)
  .then(page =>{
    console.log(page);
    return this.savePage(page);
  })
  .catch((err)=>{
    console.log(err);
    this.errors = err;
  });

  // Refactor this to promise chains and pop alerts for user
  }

  private savePage(page) {

    this.isSaving = true;
    this.pageService.UpdatePage(page, this.mode)
      .then((response:any) => {
        this.showPopup = true;
        if (response.statuscode == 200) {
          this.isSaving = false;
          this.showPopup = false;
          this.router.navigate(['/dashboard/pages']);
        }

      })
      .catch(err =>{
        this.isSaving = false;
      });
}

}  

