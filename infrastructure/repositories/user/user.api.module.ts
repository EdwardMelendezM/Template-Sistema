
import { UserRepository } from "domain/user/repositories/user.repository";
import { LoginUseCase } from "domain/user/usercases/login.usecase";
import { RegisterUseCase } from "domain/user/usercases/register.usecase";
import { UserImplemetationRepository } from "./user-implementation.repository";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";

const loginUseCaseFactory = (useUser: UserRepository)=> new LoginUseCase(useUser)
export const loginUseCaseProvider = {
  provide:LoginUseCase,
  useFactory: loginUseCaseFactory,
  deps: [UserRepository]
}

const registerUseCaseFactory = (useUser: UserRepository)=> new RegisterUseCase(useUser)
export const registerUseCaseProvider = {
  provide: RegisterUseCase,
  useFactory: registerUseCaseFactory,
  deps: [UserRepository]
}

@NgModule({
  providers:[
    loginUseCaseProvider,
    registerUseCaseProvider,
    {
      provide: UserRepository,
      useClass: UserImplemetationRepository
    }
  ],
  imports:[
    CommonModule,
    HttpClientModule
  ]
})
export class UserApiModule{}