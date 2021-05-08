import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
} from '@angular/core';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';
import { Nullable, ThemeType } from '@mk/shared';

@Component({
  selector: 'mk-theme-picker',
  templateUrl: './theme-picker.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ThemePickerComponent implements OnChanges{
  @Input() public theme: Nullable<ThemeType>;
  @Output() public readonly changeTheme = new EventEmitter<boolean>();

  public isDarkThemeActive: Nullable<boolean>;

  public changeAppTheme(event: MatSlideToggleChange): void {
    this.changeTheme.emit(event.checked);
  }

  public ngOnChanges(changes: SimpleChanges): void {
    const themeChanges = changes.theme;
    if (themeChanges.currentValue !== themeChanges.previousValue) {
      this.isDarkThemeActive = themeChanges.currentValue === ThemeType.DarkTheme;
    }
  }

}
