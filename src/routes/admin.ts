import { Router } from 'express';
import { getAddProduct, postAddProduct } from '../controllers/admin.js';

export const adminRouter = Router();

// Define routes for '/admin/add-product'
adminRouter
  .route('/add-product')
  .get(getAddProduct) // When a GET request is made to /add-product, call the getAddProduct function
  .post(postAddProduct); // When a POST request is made to /add-product, call the postAddProduct function
