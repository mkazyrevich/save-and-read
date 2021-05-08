import { Injectable } from '@angular/core';
import { ThemeType, Nullable } from '@mk/shared';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { fromSettings } from '../store';

@Injectable({
  providedIn: 'root',
})
export class MainLayoutService {
  public constructor(private readonly store: Store) {}

  public getTheme$(): Observable<Nullable<ThemeType>> {
    return this.store.pipe(select(fromSettings.selectTheme));
  }

  public requestTheme(): void {
    return this.store.dispatch(fromSettings.requestTheme());
  }

  public changeTheme(theme: ThemeType): void {
    return this.store.dispatch(fromSettings.changeTheme({theme}));
  }
}
