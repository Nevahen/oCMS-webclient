import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { PageviewComponent } from './pageview/pageview.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SafePipe } from './safe.pipe';
import { PageService } from './page.service';

export const ROUTES: Routes = [
  {
    path: 'dashboard',
    loadChildren: './dashboard/dashboard.module#DashboardModule'
  },
  {
    path: '',
    component: PageviewComponent
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
    SafePipe,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES)],
  providers: [PageService],
  bootstrap: [AppComponent]
})

export class AppModule { }
