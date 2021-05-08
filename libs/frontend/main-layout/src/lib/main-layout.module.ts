import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { RouterModule } from '@angular/router';
import { SaveReadUiModule } from '@mk/frontend/ui';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { MainLayoutComponent } from './components';
import { effects } from './effects';
import { fromCommon, fromCommonSelector } from './store';

@NgModule({
  imports: [
    CommonModule,
    SaveReadUiModule,
    RouterModule,
    MatSidenavModule,
    StoreModule.forFeature(fromCommonSelector.featureKey, fromCommon.reducers),
    EffectsModule.forFeature(effects),
  ],
  declarations: [MainLayoutComponent],
  exports: [MainLayoutComponent],
})
export class MainLayoutModule {}
