import { ISettings } from '@mk/backend/mongo';
import { Nullable } from '@mk/shared';
import { NextFunction, Request, Response } from 'express';
import { Collection } from 'mongodb';

import { BaseController } from './base-controller';
import { IRouteDescription, Method } from './controllers.interface';

export class SettingsController extends BaseController {
  public readonly path: string = '/settings';
  protected readonly routes: IRouteDescription[] = [
    {
      path: '/theme',
      method: Method.GET,
      handler: this.handleGetTheme,
    },
    {
      path: '/theme',
      method: Method.PATCH,
      handler: this.handlePatchTheme,
    },
  ];

  public async handleGetTheme(req: Request, res: Response, next: NextFunction): Promise<void> {
    const collection: Collection<ISettings> = await this.mongo.getCollection('settings');
    const settings: Nullable<ISettings> = await collection.findOne({});
    res.send({theme: settings?.theme ?? ''});
  }

  public async handlePatchTheme(req: Request, res: Response): Promise<void> {
    const theme = req.body.theme;
    const collection = await this.mongo.getCollection('settings');
    collection.updateOne({}, { $set: { theme } }, { upsert: true }).then(() => {
      res.sendStatus(200);
    });
  }
}
