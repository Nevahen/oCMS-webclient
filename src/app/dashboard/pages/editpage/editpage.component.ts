import { Component, OnInit } from '@angular/core';
import { PageService } from '../../../page.service';
import { ActivatedRoute,Router } from '@angular/router/';

@Component({
  selector: 'app-editpage',
  templateUrl: './editpage.component.html',
  styleUrls: ['./editpage.component.scss']
})
export class EditpageComponent implements OnInit {

  constructor(
    private pageService:PageService,
    private route:ActivatedRoute,
    private router:Router
  ) { }

  pageData;

  ngOnInit() {
    this.router.events
    .subscribe((event) => {
      // example: NavigationStart, RoutesRecognized, NavigationEnd
      this.pageData = this.pageService.GetPage(this.route.snapshot.paramMap.get('page'))
    });
  this.pageData = this.pageService.GetPage(this.route.snapshot.paramMap.get('page'))
  
  }

}
