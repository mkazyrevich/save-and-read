import { IServerEvents } from '@mk/shared';

export function hasSameEventType(queue: IServerEvents[], event: IServerEvents): boolean {
  return queue.some((e) => e.type === event.type);
}
