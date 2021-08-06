import { environment, Nullable } from '@mk/shared';
import { Collection, MongoClient, MongoClientOptions } from 'mongodb';

const MONGO_URL: string = environment.mongoURL || '';

export class MongoService {
  private readonly options: MongoClientOptions;
  private client: Nullable<MongoClient>;
  private connecting: Nullable<Promise<MongoClient>>;

  public constructor() {
    this.options = {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      serverSelectionTimeoutMS: 20000,
    };
  }

  public async getCollection<T>(name: string): Promise<Collection<T>> {
    const client = await this.getClient();
    const db = client.db('SaveAndRead');

    return db.collection(name);
  }

  private async getClient(): Promise<MongoClient> {
    // If there is no client
    if (!this.client) {
      try {
        // and currently no connection in progress
        if (!this.connecting) {
          // try to connect to database
          this.connecting = new MongoClient(MONGO_URL, this.options).connect();
        }

        // wait until database is connected
        this.client = await this.connecting;
      } finally {
        console.log('Connected to MongoDB successfully');
        this.connecting = undefined;
      }
    }

    return this.client;
  }
}
