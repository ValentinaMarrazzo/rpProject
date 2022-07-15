import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShopRoutingModule } from './shop-routing.module';
import { ShopComponent } from './shop.component';
import { ProductComponent } from './product/product.component';
import { CartComponent } from './cart/cart.component';
import { NzGridModule } from 'ng-zorro-antd/grid';


@NgModule({
  declarations: [
    ShopComponent,
    ProductComponent,
    CartComponent
  ],
  imports: [
    CommonModule,
    ShopRoutingModule,
    NzGridModule
  ]
})
export class ShopModule { }
