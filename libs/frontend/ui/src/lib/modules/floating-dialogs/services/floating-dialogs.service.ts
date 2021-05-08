import { GlobalPositionStrategy, Overlay, OverlayConfig, OverlayRef } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { Injectable, Injector } from '@angular/core';
import { Nullable } from '@mk/shared';

import { FloatingDialogContainerComponent } from '../components/floating-dialog-container/floating-dialog-container.component';
import { FLOATING_DIALOG_CONFIG, FloatingDialogConfig, FloatingDialogs } from '../models';

import { FloatingDialogsRegistryService } from './floating-dialogs-registry.service';

@Injectable({
  providedIn: 'root',
})
export class FloatingDialogsService {
  public constructor(
    private readonly registry: FloatingDialogsRegistryService,
    private readonly overlay: Overlay,
  ) {}
  public openFloatingDialog(id: FloatingDialogs): void {
    const dialogConfig = this.registry.getDialogConfig(id);

    if (dialogConfig) {
      this.openFloatingDialogWithConfig(dialogConfig);
    }
  }

  private openFloatingDialogWithConfig(dialogConfig: FloatingDialogConfig): void {
    const floatingDialogRef = this.overlay.create(this.getOverlayConfig(dialogConfig));
    const injector = this.createInjector(dialogConfig, floatingDialogRef);
    const portal = new ComponentPortal(FloatingDialogContainerComponent, null, injector);
    portal.attach(floatingDialogRef);
  }

  private getOverlayConfig(dialogConfig: FloatingDialogConfig): OverlayConfig {
    return {
      hasBackdrop: dialogConfig.hasBackdrop,
      positionStrategy: this.getOverlayPositionStrategy(dialogConfig.position),
      ...dialogConfig.size,
    };
  }

  private getOverlayPositionStrategy(position: Nullable<string>): GlobalPositionStrategy {
    return this.overlay.position().global().centerHorizontally().centerVertically();
  }

  private createInjector(dialogConfig: FloatingDialogConfig, overlayRef: OverlayRef): Injector {
    return Injector.create({
      providers: [
        { provide: FLOATING_DIALOG_CONFIG, useValue: dialogConfig },
        {
          provide: OverlayRef,
          useValue: overlayRef,
        },
      ],
      parent: dialogConfig.injector,
    });
  }
}
