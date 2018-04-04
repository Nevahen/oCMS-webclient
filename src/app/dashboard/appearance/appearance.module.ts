import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes } from '@angular/router/';
import { AppearanceMainComponent } from './appearance-main/appearance-main.component';
import { RouterModule } from '@angular/router/';
import { FormsModule } from '@angular/forms';

export const ROUTES : Routes = [{
  path: '', component: AppearanceMainComponent
}]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES),
    FormsModule
  ],
  declarations: [AppearanceMainComponent]
})

export class AppearanceModule { }
