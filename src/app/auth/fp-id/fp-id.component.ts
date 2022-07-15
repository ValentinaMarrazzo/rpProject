import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { ExistentAccount } from '../existent-account';

@Component({
  selector: 'app-fp-id',
  templateUrl: './fp-id.component.html',
  styleUrls: ['./fp-id.component.scss']
})
export class FpIdComponent implements OnInit {

  constructor(
    private route:ActivatedRoute,
    private auth:AuthService,
    private router:Router,
    private fb:FormBuilder

  ) { }

  newPsw = ''

  user = {
    id: 0,
    nickname: '',
    email: '',
    password: ''
  }

  validateForm!:FormGroup

  success = false

  errMsg = {
    text: 'La password dev\'essere diversa da quella già in utilizzo',
    status: false
  }

  ngOnInit(): void {
    this.route.params.subscribe((p) => {
      let id = +p['id'];
      this.getUserById(id)
    })
    this.validateForm = this.fb.group({
      password: [null, [Validators.required]]
    });
  }

getUserById(id:number){
  this.auth.getUsers().subscribe(
    (res:ExistentAccount[]) => {
     var idExist = res.find(u => u.id === id)
    if(idExist != undefined){
      this.user = idExist
    } else {
      this.router.navigate(['/auth/newPassword'])
    }
    })
}

newPassword(){
  if(this.user.password !== this.newPsw){
    this.user.password = this.newPsw;
    this.auth.changePassword(this.user.id, this.user)
    this.success = true
  }else{
    this.errMsg.status = true
  }
}

}
