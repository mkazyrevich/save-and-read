import { hasSameEventType, IServerEvents } from '@mk/shared';
import { Subject } from 'rxjs';

const DUMMY_USER_ID = 'User_Id';

interface IEvents {
  id: string;
  events: IServerEvents[];
}

export class EventsService {
  private readonly events$$: Subject<IEvents>;
  private readonly eventsQueues: Map<string, IServerEvents[]>;

  public constructor() {
    this.events$$ = new Subject();
    this.eventsQueue = new Map();
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
}
