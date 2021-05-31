import { MongoService } from '@mk/backend/mongo';
import { Router } from 'express';

import { IRouteDescription, Method } from './controllers.interface';

export abstract class BaseController {
  public readonly router: Router = Router();
  public abstract path: string;
  protected abstract readonly routes: IRouteDescription[] = [];

  public constructor(protected readonly mongo: MongoService) {}

  public setRoutes = (): Router => {
    for (const route of this.routes) {
      switch (route.method) {
        case Method.GET:
          this.router.get(route.path, route.handler.bind(this));
          break;

        case Method.POST:
          this.router.post(route.path, route.handler.bind(this));
          break;

        case Method.PATCH:
          this.router.patch(route.path, route.handler.bind(this));
          break;

        case Method.DELETE:
          this.router.delete(route.path, route.handler.bind(this));
          break;

        default:
          console.log('Invalid method');
          break;
      }
    }

    return this.router;
  };
}
