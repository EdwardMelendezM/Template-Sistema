import { Component, effect, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UserModel } from 'domain/user/models/user.model';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
}) 
export class LoginPageComponent {

  fb = inject(FormBuilder)
  authService = inject(AuthService)

  formLogin = this.fb.group({
    username: ['', [
      Validators.required,
      Validators.minLength(3)
    ]],
    password: ['', [
      Validators.required,
      Validators.minLength(3)
    ]], 
  });

  constructor(){
    effect(() => {
      this.disabledInput()
    });
  }

  disabledInput(){
    if (this.authService.isLoadingValue()){
      this.formLogin.get('username')?.disable()
      this.formLogin.get('password')?.disable()
    }else{
      this.formLogin.get('username')?.enable()
      this.formLogin.get('password')?.enable()
    }
    console.log("Consumiendo api");
    
  }


  getValueForm(name:string){
    return this.formLogin.get(name)!.value
  }

  async onSubmit(){
    if (!this.formLogin.valid) {
      return
    }

    const userValue = this.getValueForm('username');
    const passwordValue = this.getValueForm('password');
    const body: UserModel = {
      username: userValue,
      password: passwordValue
    }

    this.authService.login(body)
  
  }
}
