import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html'
})
export class RegisterComponent implements OnInit {
  formRegister = new FormGroup({
    name: new FormControl ('', [Validators.required, Validators.maxLength(30)]),
    lastName: new FormControl ('', [Validators.required, Validators.maxLength(30)]),
    email: new FormControl('', [Validators.required,Validators.pattern(
        /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i),]),
    password: new FormControl('', [Validators.required, Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)([A-Za-z\d$@$!%*?&]){8,}$/)]),
    city: new FormControl('', [Validators.required]),
    birthday: new FormControl('', [Validators.required]),
    gender: new FormControl('', [Validators.required])
  });

  confirmPassword = new FormControl('',[Validators.required]);

  constructor() { }

  ngOnInit() {
  }

  get name(){
    return this.formRegister.get('name');
  }

  get lastName(){
    return this.formRegister.get('lastName');
  }

  get email() {
    return this.formRegister.get('email');
  }

  get password() {
    return this.formRegister.get('password');
  }

  get city(){
    return this.formRegister.get('city');
  }

  get birthday(){
    return this.formRegister.get('birthday');
  }

  get gender(){
    return this.formRegister.get('gender');
  }

}
