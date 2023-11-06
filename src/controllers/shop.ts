import { RequestHandler } from 'express';

import Product from '../models/product.js';
import { error, log } from '../utils/logger.js';

export const getProducts: RequestHandler = async (_req, res) => {
  try {
    const products = await Product.find();
    log({ object: products });
    res.render('shop/product-list', {
      products,
      pageTitle: 'All Products',
      path: '/',
    });
  } catch (err) {
    error(err);
  }
};
