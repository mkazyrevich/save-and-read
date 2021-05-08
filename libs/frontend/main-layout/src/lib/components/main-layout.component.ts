import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Nullable, ThemeType } from '@mk/shared';
import { Observable } from 'rxjs';

import { MainLayoutService } from '../services/main-layout.service';

@Component({
  selector: 'mk-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainLayoutComponent implements OnInit {
  public theme$!: Observable<Nullable<ThemeType>>;

  public constructor(private readonly layout: MainLayoutService) {}

  public ngOnInit(): void {
    this.layout.requestTheme();

    this.theme$ = this.layout.getTheme$();
  }

  public changeTheme(event: boolean): void {
    const theme = event ? ThemeType.LightTheme : ThemeType.DarkTheme;
    this.layout.changeTheme(theme);
  }
}
