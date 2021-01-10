import * as fromReducers from '@my-reducers'
import { createFeatureSelector, createSelector } from '@ngrx/store';

type State = fromReducers.auth.AuthState

export const selectLogin = createFeatureSelector('auth')

export const selectAuthData = createSelector(
  selectLogin,
  (state: State) => state.user
)

export const selectToken = createSelector(
  selectLogin,
  (state: State) => state.user?.token
)
