import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { ExistentAccount } from '../existent-account';

@Component({
  selector: 'app-forgot-psw',
  templateUrl: './forgot-psw.component.html',
  styleUrls: ['./forgot-psw.component.scss']
})
export class ForgotPswComponent implements OnInit {

  constructor(private fb:FormBuilder, private auth:AuthService, private router:Router) { }

  validateForm!:FormGroup

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      email: [null, [Validators.email, Validators.required]]
    });
  }

  forgot = ''


  errMsg = {
    text: 'Questa email non esiste',
    status: false
  }

  getUserByEmail(email:string){
    this.auth.getUsers().subscribe(
       (res:ExistentAccount[]) => {
        var emailExist = res.find(u => u.email === email)
        if(emailExist != undefined){
          this.router.navigate(['/auth/newPassword/'+ emailExist.id])
        } else {
         this.errMsg.status = true
        }
      }
    )
   }


  }

