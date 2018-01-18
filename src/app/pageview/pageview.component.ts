import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router/';
import { DomSanitizer, Title } from '@angular/platform-browser/';
import { PageService } from '../page.service';
import { Router } from '@angular/router/';


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
      // example: NavigationStart, RoutesRecognized, NavigationEnd
      this.id = this.route.snapshot.paramMap.get('string');   
      this.getPage(this.id);
    });
    this.id = this.route.snapshot.paramMap.get('string');   
    this.getPage(this.id)
  }

  private id:string;
  public currentPage;
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
