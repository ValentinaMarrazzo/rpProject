import { Injectable } from '@angular/core';
import { ActivatedRoute,  ActivatedRouteSnapshot,  CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class UserGuard implements CanActivate {

  constructor(private router:Router, private userS:UserService){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      let param = this.userS.userId
      let url = 'http://localhost:4200/'
      this.userS.getUserInfo()

      if((url + param) != (url + this.userS.userId)){

        this.router.navigate(['/'])
        return false
      } else{

        return true;
      }
  }

}
