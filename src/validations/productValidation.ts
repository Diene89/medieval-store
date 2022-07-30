import Joi, { ValidationResult } from 'joi';
import { IProduct } from '../interfaces/productInterface';

const validateProduct = (data: IProduct): ValidationResult => {
  const schema = Joi.object({
    name: Joi.string().required(),
    amount: Joi.string().required(),
  });
  const { error, value } = schema.validate(data);
  if (error) throw error;
  return value;
};

export default validateProduct;