import { OverlaySizeConfig } from '@angular/cdk/overlay';
import { InjectionToken, Injector, Type } from '@angular/core';

export interface FloatingDialogConfig<C extends object = object> {
  readonly id: FloatingDialogs;
  readonly title: string;
  readonly size: OverlaySizeConfig;
  readonly component: Type<C>;
  readonly position?: string;
  readonly hasBackdrop: boolean;
  readonly injector: Injector;
}

export const enum FloatingDialogs {
  AddNewBookmark = 'add.new.bookmark',
}

export const FLOATING_DIALOG_CONFIG = new InjectionToken<FloatingDialogConfig>('floating.dialog.config');
