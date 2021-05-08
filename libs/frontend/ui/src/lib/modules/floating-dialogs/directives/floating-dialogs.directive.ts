import { OverlayRef } from '@angular/cdk/overlay';
import { Directive, HostListener, Input } from '@angular/core';
import { Nullable } from '@mk/shared';

import { FloatingDialogs } from '../models';
import { FloatingDialogsService } from '../services';

@Directive({
  selector: '[mkFloatingDialogTriggerFor]',
})
export class FloatingDialogTriggerForDirective {
  @Input('mkFloatingDialogTriggerFor') private readonly dialogId: Nullable<FloatingDialogs>;

  @HostListener('click') public onClick(): void {
    if (this.dialogId) {
      this.dialogs.openFloatingDialog(this.dialogId);
    }
  }

  public constructor(private readonly dialogs: FloatingDialogsService) {}
}

@Directive({
  selector: '[mkFloatingDialogClose]',
})
export class FloatingDialogCloseDirective {

  @HostListener('click') public onClick(): void {
    this.overlayRef.dispose();
  }

  public constructor(private readonly overlayRef: OverlayRef) {}
}
