import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';
import { IexistentCustomer } from './iexistent-customer';
import { UserService } from './user.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ExistentAccount } from '../auth/existent-account';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  constructor(private auth:AuthService, private router:Router, private route:ActivatedRoute, private user:UserService, private fb: FormBuilder, ) { }

  activeCustomer!:IexistentCustomer
  activeUser!:ExistentAccount

  customers:IexistentCustomer[] = []

  edit = false

  validateForm!: FormGroup;

  userId!:number


  ngOnInit(): void {
    this.route.params.subscribe((p) => {
      let t = +p['id'];


      this.getCustomerById(t)
      this.getActiveUser(t)



    });

    this.validateForm = this.fb.group({
      nickname: [null, [Validators.required]],
      email: [null, [Validators.email, Validators.required]]

    })



  }




/***
 * GET CURRENT USER INFO
 */
  getCustomerById(t:number){
    this.user.getCustomers().subscribe(res => {
      this.customers = res;
      let customer = this.customers.find(c => c.userId === t)
      if(customer != undefined){
        this.activeCustomer = customer

      } else {
        this.router.navigate(['/'])
      }
    })
  }

  getActiveUser(t:number){
    this.user.getUserById(t).subscribe((res) =>
    {
      this.activeUser = res
    })
  }

  /**
   * USER OPERATIONS
   */
  updateInfo(){
    this.user.updateCustomer(this.activeCustomer.id, this.activeCustomer).subscribe((res) => {
      if(res){
        window.location.reload()
      } else{
        console.log('not ok')
      }
    })
  }

  unsubscribe(){
    this.user.deleteUser(this.activeUser.id).subscribe(res => {
      if(res){
        let unsubscribed = this.customers.find( c => c.userId === this.activeUser.id)
        if(unsubscribed != undefined){
          unsubscribed.activeStatus = false
          this.user.updateDb(unsubscribed).subscribe((res) => {
            if(res){
              this.logOutNow()

            }
          })
        } else {
          console.log('unsubscribed not ok')
        }
      } else {
        console.log('not ok')
      }
    })
  }


  logOutNow(){
    this.auth.logOut()
    this.router.navigate(['/auth']).then(() => window.location.reload())
  }

}
