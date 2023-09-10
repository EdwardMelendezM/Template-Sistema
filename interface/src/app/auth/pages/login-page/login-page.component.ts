import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {
  constructor(
    private fb: FormBuilder
  ){} 
  formLogin = this.fb.group({
    user: ["", [Validators.required]],
    password: ["", [Validators.required]], 
  })

  getValueForm(name:string){
    return this.formLogin.get(name)!.value
  }

  onSubmit(){
    if (this.formLogin.valid) {
      const userValue = this.getValueForm('user');
      const passwordValue = this.getValueForm('password');
      console.log('User:', userValue);
      console.log('Password:', passwordValue);
      // Puedes agregar lógica adicional aquí, como enviar los datos al servidor
    }
  }
}
