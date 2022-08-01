import orderModel from '../models/orderModel';

const listAll = async () => {
  const orders = await orderModel();
  return { code: 200, orders };
};

export default listAll;
