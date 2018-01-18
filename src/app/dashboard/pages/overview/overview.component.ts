import { Component, OnInit } from '@angular/core';
import { PageService } from '../../../page.service';

@Component({
  selector: 'pages-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class PagesOverviewComponent implements OnInit {

  constructor(private pageService:PageService) { }

  pages = this.pageService.GetPageTitles();

  ngOnInit() {
  }

}
