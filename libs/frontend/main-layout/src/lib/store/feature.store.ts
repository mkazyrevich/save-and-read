import { Action, combineReducers } from '@ngrx/store';

import * as fromSettings from './settings.store';

export interface State {
  readonly settings: fromSettings.State;
}

const combinedReducer = combineReducers<State>({
  settings: fromSettings.reducer,
});

export function reducers(state: State, action: Action): State {
  return combinedReducer(state, action);
}
