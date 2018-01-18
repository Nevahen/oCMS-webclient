import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule} from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { FormsModule } from '@angular/forms';
import { DashboardLoginComponent } from './dashboard-login/dashboard-login.component';
import { MainviewComponent } from './mainview/mainview.component';
import { AuthGuardService } from '../auth-guard.service';
import { DashboardNavigationComponent } from './dashboard-navigation/dashboard-navigation.component';

export const ROUTES: Routes = [
  {
    path: '',
    component: DashboardComponent,
   
  }
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
