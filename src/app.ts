import express from 'express';
import 'express-async-errors';
import productRoutes from './routes/productRoutes';
import userRoutes from './routes/userRoutes';
import orderRoutes from './routes/orderRoutes';
import error from './middlewares/error';

const app = express();

app.use(express.json());

app.use('/products', productRoutes);

app.use('/users', userRoutes);

app.use('/orders', orderRoutes);

app.use(error);

export default app;