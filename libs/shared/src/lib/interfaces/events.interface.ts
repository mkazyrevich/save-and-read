export const enum EventType {
  BookmarkAdded = 'bookmarkAdded',
}

export interface IEvent<T extends string> {
  type: T;
}

export type IBookmarkAddedEvent = IEvent<EventType.BookmarkAdded>;

export type IServerEvents = IBookmarkAddedEvent;
