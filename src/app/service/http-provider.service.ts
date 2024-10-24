import { Injectable } from '@angular/core';
import {Observable, tap} from 'rxjs';
import { WebApiService } from './web-api.service';


var apiUrl = "http://localhost:9000/case-join";

@Injectable({
  providedIn: 'root'
})
export class HttpProviderService {

  constructor(private webApiService: WebApiService) { }

  public getAllProduct(): Observable<any> {
    return this.webApiService.get(`${apiUrl}/api/produtos`);
  }

  public deleteProductById(id: any): Observable<any> {
    return this.webApiService.delete(`${apiUrl}/api/produtos/${id}`);
  }

  public getProductDetailById(id: any): Observable<any> {
    return this.webApiService.get(`${apiUrl}/api/produtos/${id}`);
  }

  public saveProduct(model: any): Observable<any> {
    return this.webApiService.post(`${apiUrl}/api/produtos`, model);
  }

  // category

  public getAllCategory(): Observable<any> {
    return this.webApiService.get(`${apiUrl}/api/categorias`);
  }

  public deleteCategoryById(id: any): Observable<any> {
    return this.webApiService.delete(`${apiUrl}/api/categorias/${id}`);
  }

  public getCategoryDetailById(id: any): Observable<any> {
    return this.webApiService.get(`${apiUrl}/api/categorias/${id}`);
  }

  public saveCategory(model: any): Observable<any> {
    return this.webApiService.post(`${apiUrl}/api/categorias`, model);
  }

  // login

  login(model: any){
    return this.webApiService.post(`${apiUrl}/api/auth/login`, model).pipe(
      tap((value) => {
        const body = value.body
        sessionStorage.setItem("auth-token", body.token)
        sessionStorage.setItem("username", body.nome)
      })
    )
  }

  signup(model:any){
    return this.webApiService.post(`${apiUrl}/api/auth/register`, model).pipe(
      tap((value) => {
        console.log(value)
        sessionStorage.setItem("auth-token", value.token)
        sessionStorage.setItem("username", value.nome)
      })
    )
  }
}
