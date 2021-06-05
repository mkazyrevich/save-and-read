import { hasSameEventType, IServerEvents } from '@mk/shared';

const DUMMY_USER_ID = 'User_Id';

// interface IEvents {
//   revisionId: string;
//   events: IServerEvents[];
// }

export class EventsService {
  // private readonly events$$: Subject<IEvents>;
  private readonly eventsQueues: Map<string, IServerEvents[]>;

  public constructor() {
    // this.events$$ = new Subject();
    this.eventsQueues = new Map<string, IServerEvents[]>();
    // this.getLastEventId();
  }

  public queue(event: IServerEvents, userId: string = DUMMY_USER_ID): void {
    let queue = this.eventsQueues.get(userId);
    if (!queue) {
      queue = new Array<IServerEvents>();
      this.eventsQueues.set(userId, queue);
    }

    if (!hasSameEventType(queue, event)) {
      queue.push(event);
    }
  }

  // public async getLastEventId(userId: string = DUMMY_USER_ID): Nullable<number> {
  //   const collection = await this.getCollection();
  //   const cursor = collection.aggregate<{ lastEventId: number }>([
  //     { $match: { userId } },
  //     { $unwind: { path: '$events' } },
  //     { $group: { _id: null, lastEventId: { $max: '$events.eventId' } } },
  //     { $project: { _id: 0, lastEventId: '$lastEventId' } },
  //   ]);
  //   const res = await cursor.next();
  //
  //   return res?.lastEventId
  // }

  // private getCollection(): Promise<Collection<IMongoEvents>> {
  //   return this.mongo.getCollection('events');
  // }
}
