import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzFormModule } from 'ng-zorro-antd/form';
import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NzTypographyModule } from 'ng-zorro-antd/typography';

@NgModule({
  declarations: [
    UserComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    NzIconModule,
    NzFormModule,
    ReactiveFormsModule,
    NzTypographyModule
  ]
})
export class UserModule { }
