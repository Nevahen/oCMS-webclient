import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule} from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { FormsModule } from '@angular/forms';
import { DashboardLoginComponent } from './dashboard-login/dashboard-login.component';
import { MainviewComponent } from './mainview/mainview.component';
import { AuthGuardService } from '../auth-guard.service';
import { DashboardNavigationComponent } from './dashboard-navigation/dashboard-navigation.component';
import { PagesOverviewComponent } from './pages/overview/overview.component';
import { EditpageComponent } from './pages/editpage/editpage.component';

export const ROUTES: Routes = [
  {
    path: '',
    component: DashboardComponent,   
    children:[
      {path: '', component:MainviewComponent},
      {
        path: 'pages', loadChildren:'./pages/pages.module#PagesModule'
    
      }
    ],
    
  },
 

  
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(ROUTES)
  ],
  declarations: [DashboardComponent, MainviewComponent, DashboardNavigationComponent]
})
export class DashboardModule {

 }
