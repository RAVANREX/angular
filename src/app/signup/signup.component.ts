import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { CheckDirective } from '../check.directive';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  addressForm = this.fb.group({
    username: [null, Validators.required],
    password: [null, Validators.required],
    confirmpassword: [null, Validators.required]
      
     
    
  });

 

  constructor(private fb: FormBuilder) {}

  onSubmit() {
    alert('Thanks!');
  }
}
