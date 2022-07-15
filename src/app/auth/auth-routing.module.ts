import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth.component';
import { ForgotPswComponent } from './forgot-psw/forgot-psw.component';
import { NewpswGuard } from './forgot-psw/newpsw.guard';
import { FpIdComponent } from './fp-id/fp-id.component';

const routes: Routes = [
  { path: '', component: AuthComponent
},
{
  path: 'newPassword',
  component: ForgotPswComponent,
},
{
  path: 'newPassword/:id',
  component: FpIdComponent,
  canActivate: [NewpswGuard]
}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
