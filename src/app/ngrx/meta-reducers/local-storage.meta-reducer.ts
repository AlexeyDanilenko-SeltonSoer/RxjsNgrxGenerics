import { ActionReducer, Action } from '@ngrx/store';
import { NGRXKeys } from './ngrx-keys';
import { MyNgrxState } from '../index';

const setSavedState = (state: MyNgrxState, localStorageKey: string) => {
  localStorage.setItem(localStorageKey, JSON.stringify(state));
};

const getSavedState = (localStorageKey: string): any => {
  return JSON.parse(localStorage.getItem(localStorageKey));
};

// the keys from state which we'd like to save.
const stateKeys = NGRXKeys;
// the key for the local storage.
const localStoreKey = 'MyNGRX';

function pick<S>(obj: S, keys: string[]): any {
  return Object.assign({},
    ...Object.keys(obj)
      .filter(key => keys.some(k => k === key))
      .map(key => ({[key]: obj[key]})
      ));
}

export function localStorageMetaReducer<S, A extends Action = Action>(reducer: ActionReducer<S, A>) {
  let onInit = true;
  return (state: S, action: A): S => {
    const nextState = reducer(state, action);
    if (onInit) {
      onInit = false;
      const savedState = getSavedState(localStoreKey);
      return Object.assign(nextState, savedState);
    }

    const stateToSave = pick(nextState, stateKeys);
    setSavedState(stateToSave, localStoreKey);
    return nextState;
  };
}
