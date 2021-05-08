import { OverlayRef } from '@angular/cdk/overlay';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

import { BookmarksService } from '../../../bookmarks.service';

@Component({
  selector: 'mk-add-bookmarks-dialog',
  templateUrl: './add-bookmark-dialog.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddBookmarkDialogComponent {
  public readonly form = this.fb.group({
    bookmarkName: '',
    bookmarkURL: '',
  });

  public constructor(
    private readonly fb: FormBuilder,
    private readonly bookmarks: BookmarksService,
    private readonly overlayRef: OverlayRef,
  ) {}

  public onAddBookmark(): void {
    this.bookmarks.addBookmarks(this.form.getRawValue());
    this.overlayRef.dispose();
  }
}
