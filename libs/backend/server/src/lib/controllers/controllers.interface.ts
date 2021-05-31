import { Request, Response, NextFunction } from 'express';

export const enum Method {
  GET = 'GET',
  POST = 'POST',
  PATCH = 'PATCH',
  DELETE = 'DELETE',
}

export interface IRouteDescription {
  path: string;
  method: Method;
  handler: (req: Request, res: Response, next: NextFunction) => void | Promise<void>;
}
