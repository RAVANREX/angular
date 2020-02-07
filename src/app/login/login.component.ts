import { Component, RootRenderer, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthGuardService } from '../guards/auth-guard.service';
import { Route } from '@angular/compiler/src/core';
import { UserserviceService } from '../userservice.service';
import { Router } from '@angular/router';
import { EventEmitter } from 'protractor';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  msg:any;
  log:any;
  
  addressForm = this.fb.group({
    username: [null, Validators.required],
    password: [null, Validators.required],
  });

    constructor(private fb: FormBuilder,private service:UserserviceService,private routes:Router) {}

  check(uname: string, p : string)
  {
    var output = this.service.checkusernameandpassword(uname, p);
    console.log(output);
    if(output == true)
    {
      this.routes.navigate(['album']);
    }
    else{
this.msg ='Invalid username or password';
    }
  }

  
}
