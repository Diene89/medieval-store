import { Request, Response } from 'express';
import * as productService from '../services/productService';

export const create = async (req: Request, res: Response) => {
  const product = req.body;
  
  const { code, newProduct } = await productService.create(product);
  return res.status(code).json(newProduct);
};

export const listAll = async (_req: Request, res: Response) => {
  const { code, products } = await productService.listAll();
  return res.status(code).json(products);
};
