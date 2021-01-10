import { User } from '../../shared/models/user';
import * as fromActions from '@my-actions';
import { Action, ActionType, createReducer, on } from '@ngrx/store';
import { tap } from 'rxjs/operators';

export interface AuthState {
  user: Partial<User>
}

export const initialState: AuthState = {
  user: null
};

export const authReducer = createReducer(
  initialState,
  on(fromActions.Login, (state, action) => ({
      ...state,
      user: action.payload
  })),
  on(fromActions.ResetAuthState, state => ({...initialState}))
);

export function reducer(state: AuthState | undefined, action: Action) {
  return authReducer(state, action);
}
