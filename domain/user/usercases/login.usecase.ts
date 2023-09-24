import { UseCase } from "base/use-case";
import { UserModel } from "../models/user.model";
import { UserRepository } from "../repositories/user.repository";
import { Observable } from "rxjs";

export class LoginUseCase implements UseCase<UserModel, { error: boolean, token: string }>{

  constructor(
    private userRepository: UserRepository
  ){}

  execute(params: UserModel): Observable<{ error: boolean, token: string }>{
    return this.userRepository.login(params)
  }

}