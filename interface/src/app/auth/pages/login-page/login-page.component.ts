import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {

  constructor(
    private fb: FormBuilder,
    private router : Router
  ){} 

  formLogin = this.fb.group({
    user: ["", [
      Validators.required,
      Validators.minLength(3)
    ]],
    password: ["",[
      Validators.required,
      Validators.minLength(3)
    ]], 
  })

  getValueForm(name:string){
    return this.formLogin.get(name)!.value
  }

  onSubmit(){
    if (this.formLogin.valid) {
      const userValue = this.getValueForm('user');
      const passwordValue = this.getValueForm('password');
      // Aqui implementamos la llamada a la Api
      this.router.navigate(['/system']);
    }
  }
}
