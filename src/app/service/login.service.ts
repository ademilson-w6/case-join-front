import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs';

type LoginResponse = {
  token: string,
  nome: string
}


@Injectable({
  providedIn: 'root'
})
export class LoginService {
  apiUrl: string = "http://localhost:9000/case-join/api/auth"

  constructor(private httpClient: HttpClient) { }

  login(email: string, senha: string){
    return this.httpClient.post<LoginResponse>(this.apiUrl + "/login", { email, senha }).pipe(
      tap((value) => {
        console.log(value)
        sessionStorage.setItem("auth-token", value.token)
        sessionStorage.setItem("username", value.nome)
      })
    )
  }

  signup(nome: string, email: string, senha: string){
    return this.httpClient.post<LoginResponse>(this.apiUrl + "/register", { nome, email, senha }, {}).pipe(
      tap((value) => {
        console.log(value)
        sessionStorage.setItem("auth-token", value.token)
        sessionStorage.setItem("username", value.nome)
      })
    )
  }
}
