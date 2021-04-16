

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {ListComponent} from './list/list.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';

const routes: Routes = [
 
  {path: 'list', component: ListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponentsD = [ ListComponent]