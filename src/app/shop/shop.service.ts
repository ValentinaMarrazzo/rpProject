import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators'
import { Iproduct } from './product/iproduct';


@Injectable({
  providedIn: 'root'
})
export class ShopService {

  pruductURL = 'http://localhost:4201/products'
  public cartItemList:Iproduct[] = []
  public productListBehaviour = new BehaviorSubject<any>([])


  constructor(private http:HttpClient) { }

  getProduct(){
    return this.http.get<Iproduct[]>(this.pruductURL)
    .pipe( map((res:Iproduct[])=> {
      return res
    }))
  }

  getProductList(){
    return this.productListBehaviour.asObservable()
  }

  setProduct(product:Iproduct){
    this.cartItemList.push(product)
    this.productListBehaviour.next(product)
  }

  addToCart(product:Iproduct){
    this.cartItemList.push(product)
    this.productListBehaviour.next(this.cartItemList)
  }

  getTotalPrice():number{
    let totalPrice = 0
    this.cartItemList.map((a:Iproduct) => {
      totalPrice += a.price
    })
    return totalPrice
  }

  removeProduct(product:Iproduct){
    this.cartItemList.map((a:Iproduct, index:number) => {
      if(product.id === a.id){
        this.cartItemList.splice(index, 1)
      }
    })
  }

  emptyCart() {
    this.cartItemList = [];
    this.productListBehaviour.next(this.cartItemList)
  }


}
