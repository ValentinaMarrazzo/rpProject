import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { AboutComponent } from './about/about.component';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzIconModule } from 'ng-zorro-antd/icon';



@NgModule({
  declarations: [
    PagesComponent,
    AboutComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    NzGridModule,
    NzIconModule
  ]
})
export class PagesModule { }
