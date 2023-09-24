import { UserRepository } from "domain/user/repositories/user.repository";
import { environment } from "environment/environment";
import { HttpClient } from "@angular/common/http";
import { Observable, map } from "rxjs";
import { UserModel } from "domain/user/models/user.model";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class UserImplemetationRepository extends UserRepository{

  private baseUrl = environment.api_url
  // private userMapper = new UserImplementatinoRespositoryMapper();

  constructor(
    private http: HttpClient
  ){ super(); }


  login(params:{
    username:string,
    password:string
  }):Observable<UserModel>{
    return this.http
      .post<UserModel>(`${this.baseUrl}/auth/login`,params)
  }

  register(params: {
    username: string,
    name?: string,
    password: string
  }): Observable<UserModel> {
    return this.http
      .post<UserModel>(`${this.baseUrl}/auth/register`,params)
  }
}