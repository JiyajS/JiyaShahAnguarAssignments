import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import {UserInformationComponent} from "./user-information/user-information.component";
import {login} from "./Shared/userChanges.data";

@Injectable({
  providedIn: 'root'
})
export class OnlineBankingService {
  constructor() {}
  getUser(): Observable<Operator[]> {
    return of (login);
  }

}
