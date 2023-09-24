import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { RegisterPageComponent } from './pages/register.page/register.page.component';
import { MaterialModule } from '../material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { UserApiModule } from 'infrastructure/repositories/user/user.api.module';
import { AuthService } from './service/auth.service';


@NgModule({
  declarations: [ 
    LayoutPageComponent,
    LoginPageComponent,
    RegisterPageComponent,
    
  ], 
  imports: [
    CommonModule,
    AuthRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    UserApiModule,
  ],
  providers: [
    AuthService
  ]
})
export class AuthModule { }
