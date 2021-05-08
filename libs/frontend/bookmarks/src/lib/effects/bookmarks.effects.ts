import { Injectable } from '@angular/core';
import { ClientService } from '@mk/frontend/clients';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { throwError } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';

import { fromBookmarks } from '../store';

@Injectable({
  providedIn: 'root',
})
export class BookmarksEffects {
  public constructor(private readonly actions$: Actions, private readonly client: ClientService) {}

  public requestAllBookmarks$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(fromBookmarks.requestBookmarks),
      mergeMap(() => {
        return this.client.getAllBookmarks$().pipe(
          map((bookmarks) => {

            return fromBookmarks.loadSuccess({ bookmarks });
          }),
          catchError((error) => throwError(error)),
        );
      }),
    );
  });

  public addBookmark$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(fromBookmarks.addBookmark),
      mergeMap((action) => {
        return this.client.addBookmark$(action.bookmark).pipe(
          map(() => {
            return fromBookmarks.requestBookmarks();
          }),
        );
      }),
    );
  });
}

