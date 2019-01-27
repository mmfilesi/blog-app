import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ViewLoginComponent } from './view-login/view-login.component';

const routes: Routes  = [
  { path: 'login', component: ViewLoginComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
