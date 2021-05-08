import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { routes } from './bookmarks.routers';
import { effects } from './effects';
import { AddBookmarkDialogModule } from './modules/add-bookmark-dialog';
import { BookmarkCardModule } from './modules/bookmark-card';
import { BookmarksAsidePanelModule } from './modules/bookmarks-aside-panel';
import { BookmarksListModule } from './modules/bookmarks-list';
import { fromBookmarksFeature, fromBookmarksSelector } from './store';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    AddBookmarkDialogModule,
    BookmarksAsidePanelModule,
    BookmarksListModule,
    BookmarkCardModule,
    StoreModule.forFeature(fromBookmarksSelector.featureKey, fromBookmarksFeature.reducers),
    EffectsModule.forFeature(effects),
  ],
})
export class BookmarksModule {}
