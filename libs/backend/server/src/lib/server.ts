import * as http from 'http';

import { Application } from 'express';

import { BaseController } from './controllers';

export class Server {
  public constructor(private readonly app: Application, private readonly port: number) {
  }

  public run(): http.Server {
    return this.app.listen(this.port, () => {
      console.log(`Up and running on port ${this.port}`);
    });
  }

  // public loadGlobalMiddleware(middleware: Array<RequestHandler>): void {
  //   // global stuff like cors, body-parser, etc
  //   middleware.forEach(mw => {
  //     this.app.use(mw);
  //   });
  // };

  public loadControllers(controllers: BaseController[]): void {
    controllers.forEach((controller) => {
      // use setRoutes method that maps routes and returns Router object
      this.app.use(controller.path, controller.setRoutes());
    });
  }
}
