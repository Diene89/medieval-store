import { Request, Response } from 'express';
import orderService from '../services/orderService';

const listAll = async (_req: Request, res: Response) => {
  const { code, orders } = await orderService();
  return res.status(code).json(orders);
};

export default listAll;