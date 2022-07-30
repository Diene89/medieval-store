import { IProduct } from '../interfaces/productInterface';
import validateProduct from '../validations/productValidation';
import productModel from '../models/productModel';

const create = async (product: IProduct) => {
  validateProduct(product);
  const newProduct = await productModel(product);
  return { code: 201, newProduct };
};

export default create;