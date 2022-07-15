import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IexistentCustomer } from '../user/iexistent-customer';
import { ExistentAccount } from './existent-account';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }

  isLoggedIn = this.isUserLogged()
  isInForgotPage = false

  usersUrl:string = 'http://localhost:4201/users';
  registerUrl:string = 'http://localhost:4201/users/register';
  customerUrl:string = 'http://localhost:4201/customers'
  loginUrl:string = 'http://localhost:4201/login';


  login(loggingUser:ExistentAccount){
    return this.http.post(this.loginUrl, loggingUser)
  }

  register(newUser:ExistentAccount){
    return this.http.post<ExistentAccount>(this.registerUrl, newUser)
  }

  trackUser(token:string){
    localStorage.setItem('token', token)
    this.isLoggedIn = true
   }

   isUserLogged(){
     return localStorage.getItem('token') != null
   }

   logOut(){
    localStorage.removeItem('token')
    this.isLoggedIn = false
   }

   addCustomer(newCustomer:IexistentCustomer){
    return this.http.post<IexistentCustomer>(this.customerUrl, newCustomer)
   }

 getUsers(){
  this.isInForgotPage = true
 return this.http.get<ExistentAccount[]>(this.usersUrl)
 }

 changePassword(id:number, newU:ExistentAccount){
  return this.http.put(this.usersUrl + '/' + id, newU)
 }

}
