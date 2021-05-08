import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Bookmark, BookmarkToAdd, environment, ThemeType } from '@mk/shared';
import { Observable } from 'rxjs';
import { map, mapTo } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ClientService {
  public constructor(private readonly http: HttpClient) {}

  public getAllBookmarks$(): Observable<Bookmark[]> {
    const url = getUrl('bookmarks');

    return this.http.get<Bookmark[]>(url);
  }

  public addBookmark$(bookmark: BookmarkToAdd): Observable<void> {
    const url = getUrl('bookmarks');

    return this.http.post(url, { bookmark }, { responseType: 'text' }).pipe(mapTo(undefined));
  }

  public getTheme$(): Observable<ThemeType> {
    const url = getUrl('settings/theme');

    return this.http.get<{ theme: ThemeType }>(url).pipe(
      map((theme) => {
        return theme.theme ? theme.theme : ThemeType.DarkTheme;
      }),
    );
  }

  public modifyTheme$(theme: ThemeType): Observable<void> {
    const url = getUrl('settings/theme');

    return this.http.patch(url, { theme }, { responseType: 'text' }).pipe(mapTo(undefined));
  }
}

function getServerUrl(): string {
  return environment.serverUrl;
}

function getUrl(url: string): string {
  return `${getServerUrl()}/${url}`;
}
