import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { BookmarkCardComponent } from './bookmark-card/bookmark-card.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [BookmarkCardComponent],
  exports: [BookmarkCardComponent],
})
export class BookmarkCardModule {

}
