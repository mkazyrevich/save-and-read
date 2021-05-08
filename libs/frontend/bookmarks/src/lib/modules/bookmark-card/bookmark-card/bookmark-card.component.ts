import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Nullable } from '@mk/shared';

@Component({
  selector: 'mk-bookmark-card',
  templateUrl: './bookmark-card.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BookmarkCardComponent {
  @Input() public bookmarkName: Nullable<string>;
  @Input() public bookmarkURL: Nullable<string>;
}
