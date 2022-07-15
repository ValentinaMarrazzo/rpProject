import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  isLoggedInNC:boolean = false

  constructor( private auth:AuthService) { }

  ngOnInit(): void {
    this.isLoggedInNC = this.auth.isLoggedIn
  }

}
