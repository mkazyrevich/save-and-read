import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Nullable } from '@mk/shared';

@Component({
  selector: 'mk-floating-dialog-header',
  templateUrl: './floating-dialog-header.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FloatingDialogHeaderComponent {
  @Input() public readonly title: Nullable<string>;
}
