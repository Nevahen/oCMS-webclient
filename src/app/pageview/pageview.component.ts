import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router/';
import { DomSanitizer } from '@angular/platform-browser/';
import { PageService } from '../page.service';
import { Router } from '@angular/router/';


@Component({
  selector: 'app-pageview',
  template: '<navbar></navbar><div *ngIf="currentPage" [innerHtml]="currentPage.content"></div>',
  styleUrls: ['./pageview.component.scss']
})
export class PageviewComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private pageService: PageService,
    private cdRef: ChangeDetectorRef
  ) { }

  ngOnInit() {
    this.router.events
    .subscribe((event) => {
      // example: NavigationStart, RoutesRecognized, NavigationEnd
      this.id = this.route.snapshot.paramMap.get('string');   
      this.getPage(this.id);
    });
    this.id = this.route.snapshot.paramMap.get('string');   
    this.getPage(this.id)
  }

  id:string;
  currentPage;

  public getPage(id:string){
    this.pageService.GetPage(id)
    .subscribe(page => this.currentPage = page);
  }

}
