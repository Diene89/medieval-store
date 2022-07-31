import { Router } from 'express';
import * as productController from '../controllers/productController';

const router = Router();

router.post('/', productController.create);
router.get('/', productController.listAll);

export default router;