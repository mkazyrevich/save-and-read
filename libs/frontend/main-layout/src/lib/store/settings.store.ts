import { ThemeType, Nullable } from '@mk/shared';
import { createAction, createReducer, createSelector, on, props } from '@ngrx/store';

import * as fromCommonSelector from './feature.selector';

//////////////////////////////////////////////
//////////////////Actions/////////////////////
//////////////////////////////////////////////

export const requestTheme = createAction('[Settings] Request Theme');
export const changeTheme = createAction('[Settings] Change Theme', props<{ theme: ThemeType }>());
export const loadSuccess = createAction('[Settings] Load Theme Success', props<{ theme: ThemeType }>());

///////////////////////////////////////////////
//////////////////Reducers/////////////////////
///////////////////////////////////////////////

export interface State {
  readonly theme: Nullable<ThemeType>;
}

export const initialState: State = {
  theme: null,
};

export const reducer = createReducer(
  initialState,
  on(loadSuccess, (state, { theme }) => ({
    ...state,
    theme,
  })),
);

////////////////////////////////////////////////
//////////////////Selectors/////////////////////
////////////////////////////////////////////////

export const selectSettings = createSelector(
  fromCommonSelector.selectCommonState,
  (state) => state.settings,
);

export const selectTheme = createSelector(selectSettings, (state) => state.theme);
