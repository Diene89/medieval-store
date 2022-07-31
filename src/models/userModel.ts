import { ResultSetHeader } from 'mysql2';
import { IUser } from '../interfaces/userInterface';
import connection from './connection';

const TABLE = 'Trybesmith.Users';

export const create = async (user: IUser): Promise<IUser> => {
  const { username, classe, level, password } = user;
  const query = `INSERT INTO ${TABLE} (username, classe, level, password) VALUES (?, ?, ?, ?)`;
  const [{ insertId: id }] = await connection
    .query<ResultSetHeader>(query, [username, classe, level, password]);
  const newUser: IUser = { id, username, classe, level, password };
  return newUser;
};

export const findUser = async (userName: string): Promise<IUser | null> => {
  const query = `SELECT * FROM ${TABLE} WHERE username = ?`;
  const values = [userName];

  const [data] = await connection.query(query, values);
  const [user] = data as IUser[];

  return user || null;
};
