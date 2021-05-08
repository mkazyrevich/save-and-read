import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Bookmark, Nullable } from '@mk/shared';

@Component({
  selector: 'mk-bookmarks-list',
  templateUrl: './bookmarks-list-view.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BookmarksListViewComponent {
  @Input() public allBookmarks: Nullable<Bookmark[]>;
}
