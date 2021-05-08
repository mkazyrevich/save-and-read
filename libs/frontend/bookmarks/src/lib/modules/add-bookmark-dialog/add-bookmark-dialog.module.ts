import { CommonModule } from '@angular/common';
import { Injector, NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import {
  FloatingDialogsModule,
  FloatingDialogsRegistryService,
  FloatingDialogs,
} from '@mk/frontend/ui';

import { AddBookmarkDialogComponent } from './add-bookmark-dialog/add-bookmark-dialog.component';

@NgModule({
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatListModule,
    FloatingDialogsModule,
    ReactiveFormsModule,
    MatInputModule,
  ],
  declarations: [AddBookmarkDialogComponent],
  exports: [AddBookmarkDialogComponent],
})
export class AddBookmarkDialogModule {
  public constructor(floatingDialogsRegistry: FloatingDialogsRegistryService, injector: Injector) {
    floatingDialogsRegistry.registerDialog({
      id: FloatingDialogs.AddNewBookmark,
      title: 'Add New Bookmark',
      component: AddBookmarkDialogComponent,
      hasBackdrop: true,
      size: {
        width: '300px',
        height: '230px',
      },
      injector,
    });
  }
}
