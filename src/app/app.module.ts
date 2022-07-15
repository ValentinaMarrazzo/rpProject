import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { it_IT } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import it from '@angular/common/locales/it';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NavComponent } from './nav/nav.component';
import { HeaderComponent } from './nav/header/header.component';
import { AuthInterceptor } from './auth/auth.interceptor';

registerLocaleData(it);

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NzLayoutModule,
    NzIconModule
  ],
  providers: [{ provide: NZ_I18N, useValue: it_IT },
  {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
