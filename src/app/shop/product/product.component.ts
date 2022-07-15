import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';
import { ShopService } from '../shop.service';
import { Iproduct } from './iproduct';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

 public  productList!:Iproduct[]
 isLoggedInPC = false
 item!:any

  constructor(private shopS:ShopService, private auth:AuthService, public ruoter:Router) { }

  ngOnInit(): void {
    this.shopS.getProduct()
    .subscribe(res=>{
      this.productList = res

    })


    this.isLoggedInPC = this.auth.isLoggedIn
  }

  putInCart(product:Iproduct){
    if(this.isLoggedInPC){
      this.shopS.addToCart(product)
    }else{
      this.ruoter.navigate(['/auth'])
    }

    this.control(product)
  }

  control(product:Iproduct){
    this.item = this.productList.find(p => p === product)

  }


}
