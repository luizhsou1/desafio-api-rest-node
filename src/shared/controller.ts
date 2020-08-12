import { Request, Response, NextFunction } from 'express';

// TODO Altamente acoplado ao framework express, caso dê tempo, volte e crie um adapter
export interface Controller {
  handle(request: Request, response: Response, next?: NextFunction): Promise<Response>;
}
