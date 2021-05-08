import { Bookmark, EMPTY_ARRAY, Nullable, BookmarkToAdd } from '@mk/shared';
import * as bodyParser from 'body-parser';
import * as express from 'express';
import { Db } from 'mongodb';

import { ISettings } from '../db/models/settings.interface';
import { connectMongo } from '../db/mongodb';

const app = express();
let db: Nullable<Db>;
connectMongo().then((mongoDb) => (db = mongoDb));
const server = app.listen(3000, () => {
  console.log(`Listening at http://localhost:3000`);
});
server.on('error', console.error);

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

app.get('/settings/theme', async (req, res) => {
  const settings: Nullable<ISettings> = await db?.collection('settings').findOne({});
  res.send({ theme: settings?.theme ?? '' });
});

app.patch('/settings/theme', async (req, res) => {
  const theme = req.body.theme;
  await db
    ?.collection('settings')
    .updateOne({}, { $set: { theme } }, { upsert: true })
    .then(() => res.sendStatus(200));
});

app.get('/bookmarks', async (req, res) => {
  const bookmarks: Nullable<Bookmark[]> = await db?.collection('bookmarks').find().toArray();
  res.send(bookmarks ?? EMPTY_ARRAY);
});

app.post('/bookmarks', async (req, res) => {
  const bookmark: BookmarkToAdd = req.body.bookmark;
  await db
    ?.collection('bookmarks')
    .insertOne(bookmark)
    .then(() => res.sendStatus(200));
});
