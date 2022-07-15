import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ExistentAccount } from '../auth/existent-account';
import { IexistentCustomer } from './iexistent-customer';
//import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient, private route:ActivatedRoute) { }

  allUserUrl = 'http://localhost:4201/users'
  allCustomersUrl = 'http://localhost:4201/customers'
  userId!:number
  param!:number

  /***
   * TOKEN
   */
   getUserInfo(){
    const token = this.getToken();
    let playload;
    let info;
    if(token) {
      playload = token.split('.')[1];
      playload = window.atob(playload)
      info = JSON.parse(playload)
      this.userId = info.sub
    } else {
      console.log('not ok')
    }
  }

  getToken(){
    return localStorage.getItem('token')
  }

    /***
   * GET USER INFO
   */

  getCustomers(){
    return this.http.get<IexistentCustomer[]>(this.allCustomersUrl)
  }

  getUserById(id:any){
    return this.http.get<ExistentAccount>(this.allUserUrl + '/' + id)
  }

  /***
   * OPERATIONS
   */

  updateCustomer(id:any, data:any){
    return this.http.put(this.allCustomersUrl + '/' + id, data)
  }

  deleteUser(id:any){
    return this.http.delete(this.allUserUrl + '/' + id)
  }

  updateDb(customer:IexistentCustomer){
    return this.http.post(this.allCustomersUrl, customer)
  }



}
