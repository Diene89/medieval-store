import { ResultSetHeader } from 'mysql2';
import { IProduct } from '../interfaces/productInterface';
import connection from './connection';

const TABLE = 'Trybesmith.Products';

const create = async (product: IProduct): Promise<IProduct> => {
  const { name, amount } = product;
  const query = `INSERT INTO ${TABLE} (name, amount) VALUES (?, ?)`;
  const [{ insertId: id }] = await connection.query<ResultSetHeader>(query, [name, amount]);
  const newProduct: IProduct = { id, name, amount };
  return newProduct;
};

export default create;
