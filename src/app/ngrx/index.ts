import * as fromReducers from '@my-reducers'
import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { AuthEffects } from '@my-store/auth/auth.effects';
import { localStorageMetaReducer } from '@my-store/meta-reducers/local-storage.meta-reducer';

export interface MyNgrxState {
  auth: fromReducers.auth.AuthState
}

export const reducers: ActionReducerMap<MyNgrxState> = {
  auth: fromReducers.auth.reducer
}

export const effects = [
  AuthEffects
]

export const metaReducers: MetaReducer[] = [
  localStorageMetaReducer
];
