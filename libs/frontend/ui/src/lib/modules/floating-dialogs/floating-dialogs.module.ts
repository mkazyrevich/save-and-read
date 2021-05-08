import { OverlayModule } from '@angular/cdk/overlay';
import { PortalModule } from '@angular/cdk/portal';
import { NgModule } from '@angular/core';

import { FloatingDialogContainerComponent } from './components/floating-dialog-container/floating-dialog-container.component';
import { FloatingDialogContentComponent } from './components/floating-dialog-content/floating-dialog-content.component';
import { FloatingDialogFooterComponent } from './components/floating-dialog-footer/floating-dialog-footer.component';
import { FloatingDialogHeaderComponent } from './components/floating-dialog-header/floating-dialog-header.component';
import { FloatingDialogComponent } from './components/floating-dialog/floating-dialog.component';
import { FloatingDialogTriggerForDirective, FloatingDialogCloseDirective } from './directives/floating-dialogs.directive';

@NgModule({
  imports: [OverlayModule, PortalModule],
  declarations: [
    FloatingDialogTriggerForDirective,
    FloatingDialogCloseDirective,
    FloatingDialogContainerComponent,
    FloatingDialogHeaderComponent,
    FloatingDialogFooterComponent,
    FloatingDialogContentComponent,
    FloatingDialogComponent,
  ],
  exports: [
    FloatingDialogTriggerForDirective,
    FloatingDialogCloseDirective,
    FloatingDialogContainerComponent,
    FloatingDialogHeaderComponent,
    FloatingDialogFooterComponent,
    FloatingDialogContentComponent,
    FloatingDialogComponent,
  ],
})
export class FloatingDialogsModule {}
