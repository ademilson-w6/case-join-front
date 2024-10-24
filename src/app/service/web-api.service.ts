import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { map } from 'rxjs/operators';
import { catchError } from 'rxjs/internal/operators/catchError';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WebApiService {
  authToken: string | null;

  constructor(private httpClient: HttpClient) {
    this.authToken = sessionStorage.getItem('auth-token');
  }

  get(url: string): Observable<any> {
    console.log(sessionStorage.getItem('auth-token'))
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Cache-Control' : 'no-cache',
        'Pragma' : 'no-cache',
        'Authorization': `Bearer ${this.authToken}`
      }),
      observe: "response" as 'body'
    };

    return this.httpClient.get(
      url,
      httpOptions
    )
      .pipe(
        map((response: any) => this.ReturnResponseData(response)),
        catchError(this.handleError)
      );
  }

  post(url: string, model: any): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.authToken}`
      }),
      observe: "response" as 'body'
    };

    return this.httpClient.post(
      url,
      model,
      httpOptions)
      .pipe(
        map((response: any) => this.ReturnResponseData(response)),
        catchError(this.handleError)
      );
  }

  delete(url: string): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.authToken}`
      }),
      observe: "response" as 'body'
    };

    return this.httpClient.delete(
      url,
      httpOptions)
      .pipe(
        map((response: any) => this.ReturnResponseData(response)),
        catchError(this.handleError)
      );
  }


  private ReturnResponseData(response: any) {
    console.log(response)
    return response;
  }

  private handleError(error: any) {
    return throwError(error);
  }

}
