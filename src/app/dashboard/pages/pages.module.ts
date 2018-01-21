import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { PagesOverviewComponent } from './overview/overview.component';
import { EditpageComponent } from './editpage/editpage.component';
import { FormsModule } from '@angular/forms';

export const ROUTES: Routes = [
  {
    path: '',
    component:PagesOverviewComponent,
    children:[{
      path:'edit/:page',
      component:EditpageComponent
    },
    {
      path:'edit',
      redirectTo:""
    }
  ]
  }];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(ROUTES)
  ],
  declarations: [PagesOverviewComponent,EditpageComponent]
})
export class PagesModule { }
