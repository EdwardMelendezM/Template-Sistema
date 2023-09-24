import { UserRepository } from "domain/user/repositories/user.repository";
import { environment } from "environment/environment";
import { HttpClient } from "@angular/common/http";
import { Observable, map } from "rxjs";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class UserImplemetationRepository extends UserRepository{

  private baseUrl = environment.api_url
  constructor(
    private http: HttpClient
  ){ super(); }


  login(params:{
    username:string,
    password:string
  }): Observable<{ error: boolean, token: string }>{
    return this.http
      .post<{ error: boolean, token: string }>(`${this.baseUrl}/auth/login`,params)
  }

  register(params: {
    username: string,
    name?: string,
    password: string
  }): Observable<{ error: boolean, token: string }> {
    return this.http
      .post<{ error: boolean, token: string }>(`${this.baseUrl}/auth/register`,params)
  }
}