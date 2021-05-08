import { Routes } from '@angular/router';

import { BookmarksAsideComponent } from './modules/bookmarks-aside-panel/bookmarks-aside/bookmarks-aside.component';
import { BookmarksListContainerComponent } from './modules/bookmarks-list/bookmarks-list-container/bookmarks-list-container.component';

export const routes: Routes = [
  {
    path: '',
    component: BookmarksListContainerComponent,
    outlet: 'main',
  },
  {
    path: '',
    component: BookmarksAsideComponent,
    outlet: 'aside',
  },
];
