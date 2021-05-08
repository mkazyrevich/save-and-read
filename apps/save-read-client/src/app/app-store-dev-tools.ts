import { ModuleWithProviders, Type } from '@angular/core';
import { environment } from '@mk/shared';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

export const STORE_DEV_TOOLS:
  | Type<object>
  | ModuleWithProviders<object> = StoreDevtoolsModule.instrument({
  name: 'Save&Read Store DevTools',
  maxAge: 100,
  logOnly: environment.production,
});
