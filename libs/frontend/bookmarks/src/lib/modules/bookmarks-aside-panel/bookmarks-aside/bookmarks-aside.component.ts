import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FloatingDialogs } from '@mk/frontend/ui';

@Component({
  selector: 'mk-bookmarks-aside',
  templateUrl: './bookmarks-aside.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BookmarksAsideComponent {
  public readonly addNewBookmarkDialogId = FloatingDialogs.AddNewBookmark;
}
