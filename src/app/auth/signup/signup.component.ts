import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';



@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {


  constructor(private fb: FormBuilder, private auth:AuthService, private router:Router) { }

  ngOnInit(): void {
    /**
     * VALIDAZIONE FORM
     */
    this.validateForm = this.fb.group({
      email: [null, [Validators.email, Validators.required]],
      password: [null, [Validators.required]],
      nickname: [null, [Validators.required]]
    });
  }

  /**
   * VALIDAZIONE FORM
   */
    validateForm!: FormGroup;

  /*submitForm(): void {
    if (this.validateForm.valid) {
      return
    } else {
      Object.values(this.validateForm.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }*/

  /**
   * REGISTRAZIONE
   */

   anAccount = {
    id: Math.floor(Math.random() * (200 - 1) + 1),
    nickname: '',
    email: '',
    password: ''
  }

  aCustomer = {
    id: 0,
    email: '',
    nickname: '',
    purchases: [],
    userId: 0,
    activeStatus: true
  }

  signUp(){
    this.aCustomer.email = this.anAccount.email;
    this.aCustomer.nickname = this.anAccount.nickname;
    this.aCustomer.userId = this.anAccount.id;

    this.auth.addCustomer(this.aCustomer).subscribe((res:any) => console.log('Customer created'))
    this.auth.register(this.anAccount).subscribe((res:any) =>
    {
      this.auth.trackUser(res.accessToken)
      this.router.navigate(['/shop']).then(() => window.location.reload())
    })

  }

}
