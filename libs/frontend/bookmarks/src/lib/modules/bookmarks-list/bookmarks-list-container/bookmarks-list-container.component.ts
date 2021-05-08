import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Bookmark, Nullable } from '@mk/shared';
import { Observable } from 'rxjs';

import { BookmarksService } from '../../../bookmarks.service';

@Component({
  selector: 'mk-bookmarks-list-container',
  templateUrl: './bookmarks-list-container.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BookmarksListContainerComponent implements OnInit {
  public allBookmarks$!: Observable<Nullable<Bookmark[]>>;

  public constructor(private readonly bookmarks: BookmarksService) {}

  public ngOnInit(): void {
    this.bookmarks.requestAllBookmarks();

    this.allBookmarks$ = this.bookmarks.getAllBookmarks$();
  }
}
