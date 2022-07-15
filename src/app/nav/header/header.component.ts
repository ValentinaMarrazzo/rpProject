import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ShopService } from 'src/app/shop/shop.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private http:HttpClient, private shopS:ShopService) { }

  public totalItems!:number
  userId = 0;

  ngOnInit(): void {
    this.getUserInfo()
    this.shopS.getProductList().subscribe(res => {
      this.totalItems = res.length
    })
  }

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



}
