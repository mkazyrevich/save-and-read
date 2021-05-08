import { TestBed } from '@angular/core/testing';

import { ThemePickerComponent } from './theme-picker.component';

describe('Theme picker', () => {
  beforeAll(() => {
    Object.defineProperty(global, 'document', {});
  });

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ThemePickerComponent],
    }).compileComponents();
  });

  it('The dark theme should be default', () => {
    const el = global.document.getElementById('themeAsset');
    const href = el?.getAttribute('href');
    expect(href).toEqual('dark-theme.css');
  });
});
