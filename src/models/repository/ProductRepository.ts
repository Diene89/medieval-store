// import { ResultSetHeader } from 'mysql2';
import { IProduct } from '../entitites/interfaces/IProduct';
import Connection from '../Connection';

const TABLE = 'Trybesmith.Products';

export default class ProductRepository {
  public static async create(product: IProduct): Promise<void> {
    await Connection.query(
      `INSERT INTO ${TABLE} (name, amount) VALUES (?, ?)`,
      [product.name, product.amount],
    );
  }
}

// export const create = async (product: IProduct): Promise<IProduct> => {
//   const { name, amount } = product;
//   const query = `INSERT INTO ${TABLE} (name, amount) VALUES (?, ?)`;
//   const [{ insertId: id }] = await Connection.query<ResultSetHeader>(query, [name, amount]);
//   const newProduct: IProduct = { id, name, amount };
//   return newProduct;
// };

// export const listAll = async (): Promise<IProduct[]> => {
//   const query = `SELECT * FROM ${TABLE}`;
//   const [products] = await connection.query(query);
//   return products as IProduct[];
// };