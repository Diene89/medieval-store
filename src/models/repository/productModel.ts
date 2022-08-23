import { ResultSetHeader } from 'mysql2';
import { IProduct } from '../entitites/interfaces/IProduct';
import connection from '../Connection';

const TABLE = 'Trybesmith.Products';

export const create = async (product: IProduct): Promise<IProduct> => {
  const { name, amount } = product;
  const query = `INSERT INTO ${TABLE} (name, amount) VALUES (?, ?)`;
  const [{ insertId: id }] = await connection.query<ResultSetHeader>(query, [name, amount]);
  const newProduct: IProduct = { id, name, amount };
  return newProduct;
};

export const listAll = async (): Promise<IProduct[]> => {
  const query = `SELECT * FROM ${TABLE}`;
  const [products] = await connection.query(query);
  return products as IProduct[];
};
