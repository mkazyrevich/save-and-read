import { ThemeType, Nullable } from '@mk/shared';

export interface ISettings {
  theme: Nullable<ThemeType>;
}

export const initialSettings: ISettings = {
  theme: null,
};
