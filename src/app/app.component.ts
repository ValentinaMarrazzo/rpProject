import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'RobertoPernozzoli';
  isCollapsed = false;

  isLoggedInAC:boolean = false

  constructor(public _router:Router, private auth:AuthService){

  }
  ngOnInit(): void {
    this.isLoggedInAC = this.auth.isLoggedIn
  }
}

