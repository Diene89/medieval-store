import orderModel from '../models/repository/orderModel';

const listAll = async () => {
  const orders = await orderModel();
  return { code: 200, orders };
};

export default listAll;
