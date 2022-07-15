import { Component, OnInit } from '@angular/core';
import { IexistentCustomer } from 'src/app/user/iexistent-customer';
import { UserService } from 'src/app/user/user.service';
import { Iproduct } from '../product/iproduct';
import { ShopService } from '../shop.service';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  cartisfull!:Iproduct[]
  totalPrice!:number


  constructor(private shopS:ShopService, private user:UserService) { }

  ngOnInit(): void {

    this.shopS.getProductList().subscribe(res => {
      this.cartisfull = res;
      this.totalPrice = this.shopS.getTotalPrice()
    })

    this.getUserInfo()

  }

  delAll(){
    this.shopS.emptyCart()
  }

  delThis(product:Iproduct){
    this.shopS.removeProduct(product)
  }

  /**
   * RECUPERO INFO DELL'UTENTE
   */

  userId!:number
  customers!:IexistentCustomer[]
  activeCustomer!:IexistentCustomer


   getUserInfo(){
    const token = this.getToken();
    let playload;
    let info;
    if(token) {
      playload = token.split('.')[1];
      playload = window.atob(playload)
      info = JSON.parse(playload)
      this.userId = info.sub
      this.getCustomerById(this.userId)
    } else {
      console.log('user info not ok')
    }
  }

  getToken(){
   return localStorage.getItem('token')
  }

  getCustomerById(t:number){
    this.user.getCustomers().subscribe(res => {
      this.customers = res;
      let customer = this.customers.find(c => c.userId === 13)
      if(customer != undefined){
        this.activeCustomer = customer

      } else {
        console.log('customer not ok')

      }
    })
  }

  /**
   * COMPLETA ORDINE
   *
   */

  completeMsg = {
    text: 'Hai completato con successo il tuo ordine!',
    status: false
  }

  confirmOrder(){
    for(let item of this.cartisfull){
      this.activeCustomer.purchases.push(item)
    }
    this.user.updateCustomer(this.activeCustomer.id, this.activeCustomer).subscribe((res) => {
      if(res){
        this.completeMsg.status = true
        this.delAll()

      }
    })
  }

}
