import { IOrder } from '../interfaces/orderInterface';
import connection from './connection';

export const listAll = async (): Promise<IOrder[]> => {
  const query = `
    SELECT orders.id, orders.userId, JSON_ARRAYAGG(products.id) AS productsIds
    FROM Trybesmith.Orders AS orders
    INNER JOIN Trybesmith.Products AS products
    ON products.orderId = orders.id
    GROUP BY orders.id
    ORDER BY orders.userId
  `;
  const [orders] = await connection.query(query);
  console.log('aquiiiiiiiii', orders);
  
  return orders as IOrder[];
};

export default listAll;
