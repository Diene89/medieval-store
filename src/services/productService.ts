import { IProduct } from '../interfaces/productInterface';
import validateProduct from '../validations/productValidation';
import * as productModel from '../models/productModel';

export const create = async (product: IProduct) => {
  validateProduct(product);
  const newProduct = await productModel.create(product);
  return { code: 201, newProduct };
};

export const listAll = async () => {
  const products = await productModel.listAll();
  return { code: 200, products };
};
