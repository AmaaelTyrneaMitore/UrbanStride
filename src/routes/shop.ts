import { Router } from 'express';

import { getProducts } from '../controllers/shop.js';

const shopRouter = Router();

shopRouter.get('/', getProducts);

export default shopRouter;
