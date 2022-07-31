import { NextFunction, Request, Response } from 'express';
import userService from '../services/userService';

const create = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const user = req.body;
    const { code, token, error } = await userService(user);
    return error ? res.status(code).json({ error })
      : res.status(code).json({ token });
  } catch (error) {
    next(error);
  }
};

export default create;