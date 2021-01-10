import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { User } from '../shared/models/user';
import { Store } from '@ngrx/store';
import { MyNgrxState } from '../ngrx';
import { Login } from '@my-actions';

@Injectable({providedIn: 'root'})
export class LoginService {

  private user: Partial<User> = {
    login: 'admin',
    password: 'qwerty'
  }
  private loginedUser: User = {
    login: 'admin',
    email: 'alexerror95@gmail.com',
    city: 'Moscow',
    country: 'Russia',
    token: true
  }

  constructor(
    private store: Store<MyNgrxState>
  ) { }

  /* Login func without backend provider */
  public login(params: Partial<User>): Observable<null | User> {
    if (this.user.login === params.login.toLowerCase() && this.user.password === params.password) {
      this.store.dispatch(Login({ payload: this.loginedUser }))
      return of(this.loginedUser)
    } else {
      throwError({status: 401})
      return of(null)
    }
  }


}
