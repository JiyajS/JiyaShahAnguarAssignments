import { Injectable } from '@angular/core';
import {login} from "../Shared/userChanges.data";
import {Observable, of,catchError,throwError} from 'rxjs';
// @ts-ignore
import {Operator} from "../Shared/Modules/operator"
import {HttpClient, HttpErrorResponse} from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class OnlineBankingService {
private  apiUrl = 'api/login';
  private users: Operator[] = login;

  constructor(private http: HttpClient) {}
    getUser():Observable<Operator[]>{
      return this.http.get<Operator[]>(this.apiUrl).pipe(catchError(this.handleError));
    }

  updateUser(user: Operator): Observable<Operator> | undefined{
    const url = `${this.apiUrl}/${user.id}`;
   return this.http.put<Operator>(url, user).pipe(catchError(this.handleError));
  }

  addUser(user: Operator): Observable<Operator> {
     user.id = this.generateNewId();
     return this.http.post<Operator>(this.apiUrl, user).pipe(catchError(this.handleError));
  }

  deleteUser(id: number): Observable<{}> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete(url).pipe(catchError(this.handleError));
  }

  getUserById(id: number): Observable<Operator> {
   return this.http.get<Operator>(`${this.apiUrl}/${id}`).pipe(catchError(this.handleError));
  }
  generateNewId(): number{
    return this.users.length > 0 ? Math.max(...this.users.map(user => user.id)) + 1 : 1;
  }
  private handleError(error: HttpErrorResponse){
    console.error('API error:',error);
    return throwError(()=> new Error('Server error, please try again'))
  }


}


