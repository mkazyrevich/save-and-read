import { Injectable } from '@angular/core';
import { ClientService } from '@mk/frontend/clients';
import { ThemeType } from '@mk/shared';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { throwError } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';

import { fromSettings } from '../store';

@Injectable({
  providedIn: 'root',
})
export class SettingsEffects {
  public constructor(private readonly actions$: Actions, private readonly client: ClientService) {}

  public requestTheme$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(fromSettings.requestTheme),
      mergeMap(() => {
        return this.client.getTheme$().pipe(
          map((theme) => {
            setTheme(theme);

            return fromSettings.loadSuccess({ theme });
          }),
          catchError((error) => throwError(error)),
        );
      }),
    );
  });

  public changeTheme$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(fromSettings.changeTheme),
      mergeMap((action) => {
        return this.client.modifyTheme$(action.theme).pipe(
          map(() => {
            return fromSettings.requestTheme();
          }),
        );
      }),
    );
  });
}

function setTheme(theme: ThemeType): void {
  let el = document.getElementById('theme');
  if (!el) {
    el = document.createElement('link');
    el.setAttribute('id', 'theme');
    el.setAttribute('rel', 'stylesheet');
    document.head.append(el);
  }
  el.setAttribute('href', `${theme}.css`);
}
