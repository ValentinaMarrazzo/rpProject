import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { GuestGuard } from './auth/guest.guard';


const routes: Routes = [
  { path: '', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
  { path: 'shop', loadChildren: () => import('./shop/shop.module').then(m => m.ShopModule) },
  { path: 'auth', canActivate: [GuestGuard], loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) },
  { path: 'user', canActivate: [AuthGuard], loadChildren: () => import('./user/user.module').then(m => m.UserModule) },
  { path: 'pages', loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule) },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
