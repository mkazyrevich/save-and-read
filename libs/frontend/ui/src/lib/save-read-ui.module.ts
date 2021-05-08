import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';

import { AsideMenuComponent } from './components/aside-menu/aside-menu.component';
import { HeaderComponent } from './components/header/header.component';
import { ThemePickerComponent } from './components/theme-picker/theme-picker.component';
import { FloatingDialogsModule } from './modules/floating-dialogs';

@NgModule({
  imports: [
    CommonModule,
    MatSidenavModule,
    MatToolbarModule,
    MatSlideToggleModule,
    MatIconModule,
    RouterModule,
    FloatingDialogsModule,
  ],
  declarations: [AsideMenuComponent, HeaderComponent, ThemePickerComponent],
  exports: [AsideMenuComponent, HeaderComponent, ThemePickerComponent],
})
export class SaveReadUiModule {}
