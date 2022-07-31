import { IUser } from '../interfaces/userInterface';
import validateUser from '../validations/userValidation';
import * as userModel from '../models/userModel';
import createToken from '../middlewares/token';

const create = async (user: IUser) => {
  validateUser(user);
  const userExists = await userModel.findUser(user.username);
  if (userExists) return { code: 400, error: { message: 'Usuário já existe' } };
    
  await userModel.create(user);
  const token = createToken(user.username);
  return { code: 201, token };
};

export default create;