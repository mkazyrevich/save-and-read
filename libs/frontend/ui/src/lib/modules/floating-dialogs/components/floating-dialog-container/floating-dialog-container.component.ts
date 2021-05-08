import { ComponentPortal } from '@angular/cdk/portal';
import { ChangeDetectionStrategy, Component, Inject, OnInit } from '@angular/core';
import { Nullable } from '@mk/shared';

import { FLOATING_DIALOG_CONFIG, FloatingDialogConfig } from '../../models';

@Component({
  selector: 'mk-floating-dialog-container',
  templateUrl: './floating-dialog-container.component.html',
  styleUrls: ['./floating-dialog-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FloatingDialogContainerComponent implements OnInit {
  public content: Nullable<ComponentPortal<unknown>>;

  public constructor(
    @Inject(FLOATING_DIALOG_CONFIG) public readonly dialogConfig: FloatingDialogConfig,
  ) {}

  public ngOnInit(): void {
    this.content = new ComponentPortal(this.dialogConfig.component);
  }
}
