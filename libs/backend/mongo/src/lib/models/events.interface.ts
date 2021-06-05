import { EventType } from '@mk/shared';

export interface IMongoEvents {
  userId: string;
  events: {
    eventsType: EventType;
    eventId: number;
  }[];
}
