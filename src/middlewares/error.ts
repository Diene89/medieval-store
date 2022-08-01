import { Request, Response, NextFunction } from 'express';

export default (err: Error, _req: Request, res: Response, _next: NextFunction) => {
  switch (err.name) {
    case 'ValidationError':
      if (err.message.includes('required')) {
        res.status(400).json({ message: err.message });
      } res.status(422).json({ message: err.message });
      break;
    default: res.status(500).json({ message: err.message });
      break;
  }
};