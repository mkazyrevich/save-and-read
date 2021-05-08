import { BookmarkToAdd, Bookmark, EMPTY_ARRAY } from '@mk/shared';
import { createAction, createReducer, createSelector, on, props } from '@ngrx/store';

import * as fromBookmarksSelector from './feature.selector';

//////////////////////////////////////////////
//////////////////Actions/////////////////////
//////////////////////////////////////////////

export const requestBookmarks = createAction('[Bookmarks] Request Bookmarks');
export const loadSuccess = createAction(
  '[Bookmarks] Load Bookmarks Success',
  props<{ bookmarks: Bookmark[] }>(),
);
export const addBookmark = createAction(
  '[Bookmarks] Add Bookmark',
  props<{ bookmark: BookmarkToAdd }>(),
);

///////////////////////////////////////////////
//////////////////Reducers/////////////////////
///////////////////////////////////////////////

export interface State {
  readonly data: Bookmark[];
}

export const initialState: State = {
  data: EMPTY_ARRAY,
};

export const reducer = createReducer(
  initialState,
  on(loadSuccess, (state, { bookmarks }) => ({
    ...state,
    data: bookmarks,
  })),
);

////////////////////////////////////////////////
//////////////////Selectors/////////////////////
////////////////////////////////////////////////

export const selectAllBookmarks = createSelector(
  fromBookmarksSelector.selectBookmarksState,
  (state) => state.allBookmarks.data,
);
