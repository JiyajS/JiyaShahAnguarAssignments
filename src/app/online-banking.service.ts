import { Injectable } from '@angular/core';
import {login} from "./Shared/userChanges.data";
import {Observable, of} from 'rxjs';
// @ts-ignore
import {Operator} from "../Shared/Modules/operator"
import {operate} from "rxjs/internal/util/lift";

@Injectable({
  providedIn: 'root'
})
export class OnlineBankingService {

  private users: Operator[] = login;

  constructor() {
  }

  getUser(): Observable<Operator[]> {
    return of(login);
  }

  //Crud methods
  addUser(newUser: Operator): Observable<Operator[]> {
    this.users.push(newUser);
    return of(this.users);
  }

  updateUser(updateUser: Operator): Observable<Operator[]> {
    const index = this.users.findIndex(user => user.id === updateUser.id);
    if(index !== -1) {
      this.users[index] = updateUser;
    }
    return of(this.users);
  }

  deleteUser(studentId: number): Observable<Operator[]> {
    this.users = this.users.filter(user => user.id !== studentId);
    return of(this.users);
  }

  getUserById(studentId: number): Observable<Operator | undefined> {
    const user = this.users.find(user => user.id === studentId);
    return of(user);
  }
}


