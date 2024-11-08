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
  // addUser(newUser: Operator): Observable<Operator[]> {
  //   this.users.push(newUser);
  //   return of(this.users);
  // }

  // updateUser(updateUser: Operator): Observable<Operator[]> {
  //   const index = this.users.findIndex(user => user.id === updateUser.id);
  //   if(index !== -1) {
  //     this.users[index] = updateUser;
  //   }
  //   return of(this.users);
  // }

  updateUser(user: Operator): Observable<Operator> {
    const index = this.users.findIndex(u => u.id === user.id);
    if (index !== -1) {
      this.users[index] = user;
      console.log("User updated:", user);
    }
    return of(user); // Return an observable with the updated user
  }

  addUser(user: Operator): Observable<Operator> {
    this.users.push(user);
    console.log("User added:", user);
    return of(user); // Return an observable with the new user
  }



  deleteUser(id: number): Observable<Operator[]> {
    this.users = this.users.filter(user => user.id !== id);
    return of(this.users);
  }

  getUserById(id: number): Observable<Operator | undefined> {
    const user = this.users.find(user => user.id === id);
    return of(user);
  }
  generateNewId(): number{
    return this.users.length > 0 ? Math.max(...this.users.map(user => user.id)) + 1 : 1;
  }


}


