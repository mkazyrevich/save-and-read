import { fromCommon } from '@mk/frontend/main-layout';
import { createFeatureSelector } from '@ngrx/store';

export const featureKey = 'sr-common';

export const selectCommonState = createFeatureSelector<fromCommon.State>(featureKey);
