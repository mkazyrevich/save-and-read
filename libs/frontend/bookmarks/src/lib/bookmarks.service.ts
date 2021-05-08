import { Injectable } from '@angular/core';
import { Bookmark, BookmarkToAdd, Nullable } from '@mk/shared';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { fromBookmarks } from './store';

@Injectable({
  providedIn: 'root',
})
export class BookmarksService {
  public constructor(private readonly store: Store) {}

  public getAllBookmarks$(): Observable<Nullable<Bookmark[]>> {
    return this.store.pipe(select(fromBookmarks.selectAllBookmarks));
  }

  public requestAllBookmarks(): void {
    return this.store.dispatch(fromBookmarks.requestBookmarks());
  }

  public addBookmarks(bookmark: BookmarkToAdd): void {
    return this.store.dispatch(fromBookmarks.addBookmark({ bookmark }));
  }
}
