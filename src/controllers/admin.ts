import { RequestHandler } from 'express';

import Product, { ProductDocument } from '../models/product.js';
import { error } from '../utils/logger.js';

// Handler for rendering the "Add Product" page
export const getAddProduct: RequestHandler = (_req, res) => {
  res.render('admin/edit-product', {
    pageTitle: 'Add Product',
    path: '/admin/edit-product',
    editing: false,
  });
};

// Handler for processing the submission of a new product
export const postAddProduct: RequestHandler<
  unknown,
  unknown,
  ProductDocument
> = async (req, res) => {
  const { title, price, description } = req.body;

  // Create a new product with the data submitted by user
  const product = new Product({ title, price, description });

  try {
    // Save the product to the database
    await product.save();

    // Redirect to the admin products page after successful creation
    res.redirect('/admin/products ');
  } catch (err) {
    // If an error occurs, log it
    error(err);
  }
};
