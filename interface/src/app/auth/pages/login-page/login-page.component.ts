import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserModel } from 'domain/user/models/user.model';
import { LoginUseCase } from 'domain/user/usercases/login.usecase';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {

  constructor(
    private fb: FormBuilder,
    private router : Router,
    private loginUseCase : LoginUseCase
  ){
    console.log(loginUseCase)
  } 

  formLogin = this.fb.group({
    username: ["", [
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
      const userValue = this.getValueForm('username');
      const passwordValue = this.getValueForm('password');
      const body: UserModel = {
        username: userValue,
        password: passwordValue
      }
      // Aqui implementamos la llamada a la Api
      this.loginUseCase.execute(body).subscribe()
      console.log("api execute");
      
      // this.router.navigate(['/system']);
    }
  }
}
