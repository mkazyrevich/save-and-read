import { createFeatureSelector } from '@ngrx/store';

import * as fromBookmarksFeature from './feature.store';

export const featureKey = 'sr-bookmarks';

export const selectBookmarksState = createFeatureSelector<fromBookmarksFeature.State>(featureKey);
