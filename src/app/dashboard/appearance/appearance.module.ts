import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes } from '@angular/router/';
import { AppearanceMainComponent } from './appearance-main/appearance-main.component';
import { RouterModule } from '@angular/router/';

export const ROUTES : Routes = [{
  path: '', component: AppearanceMainComponent
}]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES)
  ],
  declarations: [AppearanceMainComponent]
})

export class AppearanceModule { }
