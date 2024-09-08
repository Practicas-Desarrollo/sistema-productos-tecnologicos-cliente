import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;
  hide: boolean = true;
  constructor() { }

  ngOnInit(): void {
    this.loginForm = new FormGroup(
      {
        username : new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z][a-zA-Z0-9._]{2,14}$')]),
        password : new FormControl('', [Validators.required, Validators.minLength(6)])
      }
    )
  }

  onLogin() : void {
    // TODO: Finish login feature
    if (this.loginForm.valid) {
      console.log('Bienvenido de nuevo!');
    } else {
      console.log('Datos no validos');
    }
  }

}
