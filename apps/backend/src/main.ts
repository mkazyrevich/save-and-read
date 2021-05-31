import { MongoService } from '@mk/backend/mongo';
import { Server, BaseController, BookmarksController, SettingsController } from '@mk/backend/server';
import * as bodyParser from 'body-parser';
import * as express from 'express';

const app = express();
app.use(bodyParser.json());
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, HEAD, OPTIONS, PUT, PATCH, DELETE');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, x-access-token, x-refresh-token',
  );
  res.header('Access-Control-Expose-Headers', 'x-access-token, x-refresh-token');
  next();
});
const server = new Server(app, 3000);
const mongo = new MongoService();
const controllers: BaseController[] = [new BookmarksController(mongo), new SettingsController(mongo)];

Promise.resolve().then(() => {
  server.loadControllers(controllers);
  server.run();
});
