import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { AppComponent } from './app.component';
import { PageviewComponent } from './pageview/pageview.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PageService } from './page.service';
import { AuthGuardService } from './auth-guard.service';
import { LoginComponent } from './login/login.component';
import { DashboardLoginComponent } from './dashboard/dashboard-login/dashboard-login.component';
import { FormsModule } from '@angular/forms';
import { SettingsService } from './settings.service';
import { NavService } from './navigation.service';
import { MarkedPipe } from './marked.pipe';
import { TokenInterceptorService } from './token-interceptor.service';
import { JwtInterceptorService } from './jwt-interceptor.service';

export const ROUTES: Routes = [
  {
    path: 'dashboard',
    canActivate:[AuthGuardService],
    loadChildren: './dashboard/dashboard.module#DashboardModule'
  },
  {
    path: '',
    redirectTo: '/index',
    pathMatch: 'full'
  },
  {
    path: 'dashboard/login',
    component: DashboardLoginComponent
  },
  {
    path: ':string',
    component: PageviewComponent
  },
  {
    path: 'tag/:string',
    component: PageviewComponent
  }
]
@NgModule({
  declarations: [
    AppComponent,
    PageviewComponent,
    NavbarComponent,
    LoginComponent,
    DashboardLoginComponent,
    MarkedPipe
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    RouterModule.forRoot(ROUTES),
    FormsModule
  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: TokenInterceptorService, multi:true},
    {provide: HTTP_INTERCEPTORS, useClass: JwtInterceptorService, multi:true},
    PageService,AuthGuardService,SettingsService, NavService],
  bootstrap: [AppComponent]
})

export class AppModule { }
