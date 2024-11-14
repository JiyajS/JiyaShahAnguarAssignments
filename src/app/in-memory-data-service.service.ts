import { InMemoryDbService } from 'angular-in-memory-web-api';
import {Operator} from "./Shared/Modules/operator";

export class InMemoryDataServiceService implements InMemoryDbService {
  //returns an object with a students property,
  // which is an array of User objects
  createDb():{login: Operator[]} {

    const login: Operator[] = [
      { id: 1, name: 'Jiya Shah', email: 'jiyajshah25@gmail.com', contacts: 456456, Admin:true },
      { id: 2, name: 'Javal Patel', email: 'javalptl@gmail.com', contacts: 54645, Admin: true },
      { id: 3, name: 'Manasvi Patel', email: 'm@gmail.com', contacts: 123123, Admin: false },
      { id: 4, name: 'Sakshi', email: 's@gmail.com', contacts: 5645484, Admin:false },
      { id: 5, name: 'Parimal', email: 'p@gmail.com', contacts: 8528787, Admin:false },
      { id: 6, name: 'Chaula', email: 'c@gmail.com', contacts: 6565466, Admin:true }
    ];
    return { login };
  }
}
