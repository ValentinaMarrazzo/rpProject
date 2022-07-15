import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { PagesComponent } from './pages.component';

const routes: Routes = [
  {path: 'aboutme', component: AboutComponent},
  { path: ':url', component: PagesComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
