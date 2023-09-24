import { Component, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../service/auth.service';
import { UserModel } from 'domain/user/models/user.model';

@Component({
  selector: 'app-register.page',
  templateUrl: './register.page.component.html',
  styleUrls: ['./register.page.component.css']
})
export class RegisterPageComponent {

  private fb = inject(FormBuilder)
  authService = inject(AuthService)

  formRegister = this.fb.group({
    username: ["", [Validators.required]],
    name: ["", [Validators.required]],
    password: ["", [Validators.required]], 
  })

  private getValueForm(name: string) {
    return this.formRegister.get(name)!.value
  }
 
  onSubmit() {
    if (!this.formRegister.valid) {
      return
    }

    const userValue = this.getValueForm('username');
    const userName = this.getValueForm('name');
    const passwordValue = this.getValueForm('password');

    const body: UserModel = {
      username: userValue,
      password: passwordValue,
      name: userName
    }
    this.authService.register(body)
  }
}
