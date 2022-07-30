import { Request, Response } from 'express';
// import { IProduct } from '../interfaces/productInterface';
import productService from '../services/productService';

const create = async (req: Request, res: Response) => {
  const product = req.body;
  console.log('product', product);
  
  const { code, newProduct } = await productService(product);
  return res.status(code).json(newProduct);
};

export default create;