import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLayoutComponent, MainLayoutModule } from '@mk/frontend/main-layout';

const routes: Routes = [
  {
    path: 'bookmarks',
    component: MainLayoutComponent,
    children:[
      {
        path: '',
        loadChildren: async () => (await import('@mk/frontend/bookmarks')).BookmarksModule,
      },
    ],
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/bookmarks',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), MainLayoutModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
