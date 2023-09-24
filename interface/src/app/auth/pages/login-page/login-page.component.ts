import { Component, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserModel } from 'domain/user/models/user.model';
import { LoginUseCase } from 'domain/user/usercases/login.usecase';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {

  router = inject(Router)
  toast = inject(ToastrService)
  fb = inject(FormBuilder)

  loginUseCase = inject(LoginUseCase)

  isLoading = false

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

    try {
      this.isLoading = true
      this.loginUseCase.execute(body).subscribe({
        next: (res) => {
          if (res && !res.error) {
            this.router.navigate(['/system']);
            this.toast.success("Bienvenido de nuevo!!")
          } else {
            throw new Error('No se pudo ingresar')
          }
        },
        error: () => {
          this.toast.error("Credenciales incorrectas")
          this.isLoading = false
        },
        complete: () => {
          this.isLoading = false
        }
      });

    } catch (error) {
      this.toast.error("Algo ha sucedido")
      this.isLoading = false
    }
  }
}
