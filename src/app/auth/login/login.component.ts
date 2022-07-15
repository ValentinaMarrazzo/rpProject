import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {


  constructor(private fb: FormBuilder, private auth:AuthService, private router:Router) { }

  ngOnInit(): void {
    /**
     * VALIDAZIONE FORM
     */
    this.validateForm = this.fb.group({
      email: [null, [Validators.email, Validators.required]],
      password: [null, [Validators.required]]
    });

  }

  /**
   * VALIDAZIONE FORM
   */

validateForm!: FormGroup;
errMsg = {
  text: 'Email o password non corretti',
  status: false
}

  /*submitForm(): void {
    if (this.validateForm.valid) {
      console.log('ok')
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
   * LOGIN
   */



  anAccount = {
    id: 0,
    nickname: '',
    email: '',
    password: ''
  }



  signin(){
    if(this.validateForm.valid){
      this.errMsg.status = false
    }
    else {
      this.errMsg.status = true
    }
    this.auth.login(this.anAccount).subscribe((res:any) =>
      {
        this.auth.trackUser(res.accessToken)
        this.router.navigate(['/shop']).then(() => window.location.reload())
      })



  }


}
