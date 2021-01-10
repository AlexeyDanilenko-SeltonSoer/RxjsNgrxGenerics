import { createAction, props } from '@ngrx/store';
import { User } from '../../shared/models/user';

export enum AuthActionsTypes {
  Login = '[Auth] WriteAuthInfo',
  Logout = '[Auth] Logout',
  ResetAuthState = '[Auth] ResetAuthState'
}

export const Login = createAction(
  AuthActionsTypes.Login,
  props<{payload: Partial<User>}>()
)

export const Logout = createAction(
  AuthActionsTypes.Logout
)

export const ResetAuthState = createAction(
  AuthActionsTypes.ResetAuthState
)
