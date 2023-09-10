import { Observable } from "rxjs";
import { UserModel } from "../models/user.model";

export abstract class UserRepository{
  abstract login(params:{
    user:string,
    password:string
  }):Observable<UserModel>

  abstract register(params:{
    user:string,
    name?:string,
    password:string
  }):Observable<UserModel>
}