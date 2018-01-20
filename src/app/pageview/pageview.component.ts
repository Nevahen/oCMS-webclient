import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router/';
import { DomSanitizer, Title } from '@angular/platform-browser/';
import { PageService } from '../page.service';
import { Router } from '@angular/router/';
import { Page } from '../_models/page';


@Component({
  selector: 'app-pageview',
  templateUrl: '../../themes/default/theme.html',
  styleUrls: ['../../themes/default/theme.scss']
})
export class PageviewComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private pageService: PageService,
    private titleService: Title
  ) { }

  ngOnInit() {
    this.router.events
    .subscribe((event) => {
      // When the route changes, update the viewed page.
      this.id = this.route.snapshot.paramMap.get('string');   
      this.getPage(this.id);
    });
    this.id = this.route.snapshot.paramMap.get('string');   
    this.getPage(this.id)
  }

  private id:string;
  public currentPage:Page;
  /**
   * Gets the requested page from [[pageService]] and updates view and title
   *@param id The route to the page
   */
  public getPage(id:string){
    this.pageService.GetPage(id)
    .subscribe(page => {this.currentPage = page;
    this.titleService.setTitle(this.currentPage.title);
    });
  }

}
