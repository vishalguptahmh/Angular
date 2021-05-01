import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { from } from 'rxjs';

import { TodolistComponent } from './components/todolist/todolist.component';
import {AboutComponent} from './components/pages/about/about.component';

const routes: Routes = [
  {path:'',component:TodolistComponent},
  {path:'about',component:AboutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
