import { Db, MongoClient } from 'mongodb';

export function connectMongo(): Promise<Db | null> {
  let dbClient: MongoClient;
  const mongoClient = new MongoClient('mongodb://localhost:27017/SaveAndRead/', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  process.on('SIGINT', async () => {
    await dbClient.close().then(() => {
      return console.log('Connection to MongoDB is closed');
    });
    process.exit();
  });

  return mongoClient
    .connect()
    .then((client) => {
      dbClient = client;
      console.log('Connected to MongoDB successfully :)');

      return client.db('SaveAndRead');
    })
    .catch((error) => {
      console.log(error);

      return null;
    });
}
