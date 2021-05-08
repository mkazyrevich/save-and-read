export interface Bookmark {
  id: string;
  bookmarkName: string;
  bookmarkURL: string;
}

export type BookmarkToAdd =  Omit<Bookmark, 'id'>;
