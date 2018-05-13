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
import { LeftPanelNaviComponent } from './left-panel-navi/left-panel-navi.component';
import { NavigationEditorComponent } from './navigation-editor/navigation-editor.component';
import { MenuitemSelectorComponent } from './navigation-editor/menuitem-selector/menuitem-selector.component';
import { UsersComponent } from './users/users.component';

export const ROUTES: Routes = [
  {
    path: '',
    component: DashboardComponent,   
    children:[
      {path: '', component:MainviewComponent},
      {
        path: 'pages', loadChildren:'./pages/pages.module#PagesModule'    
      },
      {
        path: 'appearance', loadChildren: './appearance/appearance.module#AppearanceModule'
      },
      {
        path: 'navigation', component: NavigationEditorComponent
      },
      {
        path: 'users', component: UsersComponent
      }
    ]    
  },
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(ROUTES)
  ],
  declarations: [DashboardComponent, MainviewComponent, DashboardNavigationComponent,LeftPanelNaviComponent, NavigationEditorComponent, MenuitemSelectorComponent, UsersComponent]
})
export class DashboardModule {}
