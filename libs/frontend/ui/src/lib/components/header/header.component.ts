import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { Nullable, ThemeType } from '@mk/shared';

@Component({
  selector: 'mk-header',
  templateUrl: './header.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  @Input() public theme: Nullable<ThemeType>;
  @Output() public changeTheme = new EventEmitter<boolean>();
}
