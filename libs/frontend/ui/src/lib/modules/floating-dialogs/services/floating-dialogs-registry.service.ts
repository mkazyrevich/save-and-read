import { Injectable } from '@angular/core';
import { Nullable } from '@mk/shared';
import { BehaviorSubject } from 'rxjs';

import { FloatingDialogConfig, FloatingDialogs } from '../models';

@Injectable({
  providedIn: 'root',
})
export class FloatingDialogsRegistryService {
  private readonly floatingDialogs$$: BehaviorSubject<Map<FloatingDialogs, FloatingDialogConfig>>;

  public constructor() {
    this.floatingDialogs$$ = new BehaviorSubject(new Map<FloatingDialogs, FloatingDialogConfig>());
  }

  public registerDialog(config: FloatingDialogConfig): void {
    if (this.isDialogConfigExists(config.id)) {
      return;
    }
    const dialogs = this.floatingDialogs$$.value;
    this.floatingDialogs$$.next(dialogs.set(config.id, config));
  }

  public getDialogConfig(id: FloatingDialogs): Nullable<FloatingDialogConfig> {
    if (!this.isDialogConfigExists(id)) {
      return null;
    }

    return this.floatingDialogs$$.value.get(id);
  }

  private isDialogConfigExists(id: FloatingDialogs): boolean {
    return this.floatingDialogs$$.value.has(id);
  }
}
