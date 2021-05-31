import { BookmarkToAdd, EMPTY_ARRAY } from '@mk/shared';
import { NextFunction, Request, Response } from 'express';

import { BaseController } from './base-controller';
import { IRouteDescription, Method } from './controllers.interface';

export class BookmarksController extends BaseController {
  public readonly path: string = '/bookmarks';
  protected readonly routes: IRouteDescription[] = [
    {
      path: '',
      method: Method.GET,
      handler: this.handleGetBookmarks,
    },
    {
      path: '',
      method: Method.POST,
      handler: this.handlePostBookmark,
    },
  ];

  public async handleGetBookmarks(req: Request, res: Response, next: NextFunction): Promise<void> {
    const collection = await this.mongo.getCollection('bookmarks');
    const bookmarks = await collection.find().toArray();
    res.send(bookmarks ?? EMPTY_ARRAY);
  }

  public async handlePostBookmark(req: Request, res: Response): Promise<void> {
    const bookmark: BookmarkToAdd = req.body.bookmark;
    const collection = await this.mongo.getCollection('bookmarks');
    await collection.insertOne(bookmark).then(() => {
      res.sendStatus(200);
    });
  }
}
