import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { BookmarkCardModule } from '../bookmark-card';

import { BookmarksListContainerComponent } from './bookmarks-list-container/bookmarks-list-container.component';
import { BookmarksListViewComponent } from './bookmarks-list-view/bookmarks-list-view.component';

@NgModule({
  imports: [CommonModule, BookmarkCardModule],
  declarations: [BookmarksListContainerComponent, BookmarksListViewComponent],
  exports: [BookmarksListContainerComponent],
})
export class BookmarksListModule {}
