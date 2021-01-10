import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { select, Store } from '@ngrx/store';
import { MyNgrxState } from '@my-store/index';
import * as fromSelectors from '@my-selectors'
import { map, tap } from 'rxjs/operators';

@Injectable({providedIn: 'root'})
export class AuthGuard implements CanActivate {

  constructor(
    private store: Store<MyNgrxState>,
    private router: Router
  ) {
  }

  public canActivate(): Observable<boolean> {
    return this.store.pipe(
      select(fromSelectors.auth.selectToken),
      map((token: boolean) => !!token),
      tap((token: boolean) => {
        if (!token) {
          this.router.navigate(['login'])
        }
      })
    )
  }

}
