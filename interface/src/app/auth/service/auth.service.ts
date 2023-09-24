import { Injectable, effect, inject, signal } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

import { UserModel } from 'domain/user/models/user.model';
import { LoginUseCase } from 'domain/user/usercases/login.usecase';
import { RegisterUseCase } from 'domain/user/usercases/register.usecase';
 
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private router = inject(Router)
  private toast = inject(ToastrService)

  private loginUseCase = inject(LoginUseCase)
  private registerUseCase = inject(RegisterUseCase)

  private isLoading = signal(false)

  isLoadingValue (){
    return this.isLoading()
  }

  constructor(){
    effect(() => {
      // console.log(this.isLoading())
    });
  }

  login(body: UserModel): void{
    try {
      this.isLoading.update(()=> true)
      this.loginUseCase.execute(body).subscribe({
        next: (res) => {
          if (res && !res.error) {
            this.saveTokenToLocalStorage(res.token)
            this.toast.success("Bienvenido de nuevo!!") 
            this.router.navigate(['/system/dashboard']);
          } else {
            throw new Error('No se pudo ingresar')
          }
        },
        error: () => {
          this.toast.error("Credenciales incorrectas")
          this.isLoading.update(() => false)
        },
        complete: () => {
          this.isLoading.update(() => false)
        }
      });

    } catch (error) {
      this.toast.error("Algo ha sucedido")
      this.isLoading.update(() => false)
    }
  }

  register(body: UserModel): void {
    try {
      this.isLoading.update(() => true)
      this.registerUseCase.execute(body).subscribe({
        next: (res) => {
          if (res && !res.error) {

            this.saveTokenToLocalStorage(res.token)
            this.toast.success("Bienvenido a system!!")
            
            this.router.navigate(['/system/dashboard']);

          } else {
            throw new Error('No se pudo registrar')
          }
        },
        error: () => {
          this.toast.error("Intentelo nuevamente")
          this.isLoading.update(() => false)
        },
        complete: () => {
          this.isLoading.update(() => false)
        }
      });

    } catch (error) {
      this.toast.error("Algo ha sucedido")
      this.isLoading.update(() => false)
    }
  }

  private saveTokenToLocalStorage(token: string): void {
    localStorage.setItem('token', token);
  }
  private removeTokenFromLocalStorage(): void {
    localStorage.removeItem('token');
  }

  logout(){
    this.removeTokenFromLocalStorage()
  }
}
