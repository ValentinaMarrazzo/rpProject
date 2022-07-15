import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { NzFormModule } from 'ng-zorro-antd/form';
import { ReactiveFormsModule } from '@angular/forms';
import { ForgotPswComponent } from './forgot-psw/forgot-psw.component';
import { FpIdComponent } from './fp-id/fp-id.component';




@NgModule({
  declarations: [
    AuthComponent,
    LoginComponent,
    SignupComponent,
    ForgotPswComponent,
    FpIdComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    NzButtonModule,
    NzFormModule,
    ReactiveFormsModule

  ]
})
export class AuthModule { }
