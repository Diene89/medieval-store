import jwt from 'jsonwebtoken';

const secret = process.env.JWT_SECRET || 'secret';

const createToken = (param: string) => {
  const token = jwt.sign({ data: param }, secret, { expiresIn: '7d', algorithm: 'HS256' });
    
  return token;
};

export default createToken;