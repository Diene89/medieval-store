import Joi, { ValidationResult } from 'joi';
import { IUser } from '../models/entitites/interfaces/IUser';

const validateProduct = (data: IUser): ValidationResult => {
  const schema = Joi.object({
    username: Joi.string().min(3).required(),
    classe: Joi.string().required(),
    level: Joi.number().required(),
    password: Joi.required(),
  });
  const { error, value } = schema.validate(data);
  if (error) throw error;
  return value;
};

export default validateProduct;