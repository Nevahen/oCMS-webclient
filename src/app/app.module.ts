import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http'
import { AppComponent } from './app.component';
import { PageviewComponent } from './pageview/pageview.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PageService } from './page.service';
import { AuthGuardService } from './auth-guard.service';
import { LoginComponent } from './login/login.component';
import { DashboardLoginComponent } from './dashboard/dashboard-login/dashboard-login.component';
import { FormsModule } from '@angular/forms';

export const ROUTES: Routes = [
  {
    path: 'dashboard',
    canActivate:[AuthGuardService],
    loadChildren: './dashboard/dashboard.module#DashboardModule'
  },
  {
    path: '',
    component: PageviewComponent
  },
  {
    path: 'dashboard/login',
    component: DashboardLoginComponent
  },
  {
    path: ':string',
    component: PageviewComponent
  }

]
@NgModule({
  declarations: [
    AppComponent,
    PageviewComponent,
    NavbarComponent,
    LoginComponent,
    DashboardLoginComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    RouterModule.forRoot(ROUTES),
    FormsModule
  ],
  providers: [PageService,AuthGuardService],
  bootstrap: [AppComponent]
})

export class AppModule { }
