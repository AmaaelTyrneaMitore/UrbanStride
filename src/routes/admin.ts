import { Router } from 'express';

import {
  getAddProduct,
  getEditProduct,
  postAddProduct,
  getProducts,
  postEditProduct,
} from '../controllers/admin.js';

const adminRouter = Router();

// Define routes for '/admin/add-product'
adminRouter
  .route('/add-product')
  .get(getAddProduct) // When a GET request is made to /add-product, call the getAddProduct function
  .post(postAddProduct); // When a POST request is made to /add-product, call the postAddProduct function

adminRouter.get('/products', getProducts);

adminRouter.post('/edit-product/:productId', getEditProduct);

adminRouter.post('/edit-product', postEditProduct);

export default adminRouter;
