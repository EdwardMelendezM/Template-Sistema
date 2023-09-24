import { Observable } from "rxjs";

export abstract class UserRepository{
  abstract login(params:{
    username:string,
    password:string
  }): Observable<{ error: boolean, token: string }>

  abstract register(params:{
    username:string,
    name?:string,
    password:string
  }): Observable<{ error: boolean, token: string }>
}