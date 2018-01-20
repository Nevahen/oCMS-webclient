import { Component, OnInit } from '@angular/core';
import { PageService } from '../../../page.service';

@Component({
  selector: 'pages-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class PagesOverviewComponent implements OnInit {

  pages;

  constructor(private pageService:PageService) { }

  ngOnInit() {

  this.pageService
  .GetAllPages().subscribe(data =>{
    this.pages = data
  });


  }

}
