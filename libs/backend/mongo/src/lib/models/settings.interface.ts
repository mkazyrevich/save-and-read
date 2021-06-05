import { ThemeType, Nullable } from '@mk/shared';

export interface IMongoSettings {
  theme: Nullable<ThemeType>;
}

export const initialSettings: IMongoSettings = {
  theme: null,
};
