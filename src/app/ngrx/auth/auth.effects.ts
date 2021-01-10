import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { MyNgrxState } from '@my-store/index';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { AuthActionsTypes, ResetAuthState } from '@my-actions';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable()
export class AuthEffects {

  constructor(
    private store: Store<MyNgrxState>,
    private actions$: Actions,
    private router: Router
  ) { }

  @Effect({dispatch: false})
  logout$ = this.actions$.pipe(
    ofType(AuthActionsTypes.Logout),
    tap(() => this.store.dispatch(ResetAuthState())),
    tap(() => this.router.navigate(['login']))
  )

  @Effect({dispatch: false})
  login$ = this.actions$.pipe(
    ofType(AuthActionsTypes.Login),
    tap(() => this.router.navigate(['main-rxjs']))
  )
}
