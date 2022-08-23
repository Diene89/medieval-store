import Joi, { ValidationResult } from 'joi';
import { IProduct } from '../models/entitites/interfaces/IProduct';

const validateProduct = (data: IProduct): ValidationResult => {
  const schema = Joi.object({
    name: Joi.string().min(3).required(),
    amount: Joi.string().min(3).required(),
  });
  const { error, value } = schema.validate(data);
  console.log('meu erroooooooo', error);
  if (error) throw error;
  return value;
};

export default validateProduct;