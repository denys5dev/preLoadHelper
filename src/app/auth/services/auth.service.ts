import { Injectable } from '@angular/core';
import {Authenticate, User} from '../models/user';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  login({username, password}: Authenticate): Observable<User> {
    return of({name: 'User'});
  }

  logout() {
    return of(true);
  }
}
