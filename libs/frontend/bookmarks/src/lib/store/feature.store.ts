import { Action, combineReducers } from '@ngrx/store';

import * as fromBookmarks from './bookmarks.store';

export interface State {
  readonly allBookmarks: fromBookmarks.State;
}

const combinedReducer = combineReducers<State>({
  allBookmarks: fromBookmarks.reducer,
});

export function reducers(state: State, action: Action): State {
  return combinedReducer(state, action);
}
