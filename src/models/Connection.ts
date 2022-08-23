import mysql, { Pool } from 'mysql2/promise';
import dotenv from 'dotenv';

dotenv.config();

class Connection {
  private static connection: Pool;

  constructor() {
    Connection.connection = mysql.createPool({
      user: process.env.MYSQL_USER,
      password: process.env.MYSQL_PASSWORD,
      host: process.env.MYSQL_HOST,
    });
  }

  public async query(sql: string, values: any) {
    const result = await Connection.connection.query(sql, values);
    return result;
  }
}

export default new Connection();