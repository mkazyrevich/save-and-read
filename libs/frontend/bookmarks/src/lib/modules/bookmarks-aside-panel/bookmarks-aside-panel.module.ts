import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { FloatingDialogsModule } from '@mk/frontend/ui';

import { BookmarksAsideComponent } from './bookmarks-aside/bookmarks-aside.component';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatListModule,
    FloatingDialogsModule,
  ],
  declarations: [BookmarksAsideComponent],
  exports: [BookmarksAsideComponent],
})
export class BookmarksAsidePanelModule {}
