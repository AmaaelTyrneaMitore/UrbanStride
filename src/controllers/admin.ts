import { RequestHandler } from 'express';

import Product, { ProductDocument } from '../models/product.js';
import { error } from '../utils/logger.js';

export const getProducts: RequestHandler = async (_req, res) => {
  try {
    const products = await Product.find();
    res.render('admin/product-list', {
      products,
      pageTitle: 'Admin Products',
      path: '/admin/products',
    });
  } catch (err) {
    error(err);
  }
};

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
  const product = new Product({
    title,
    price,
    description,
    userId: req.user, // we don't have to explicitly set _id as mongoose will automatically pick it
  });

  try {
    // Save the product to the database
    await product.save();

    // Redirect to the admin products page after successful creation
    res.redirect('/admin/products');
  } catch (err) {
    // If an error occurs, log it
    error(err);
  }
};

export const getEditProduct: RequestHandler<
  { productId: string },
  unknown,
  unknown,
  { [key: string]: string | unknown }
> = async (req, res) => {
  if (req.query.edit !== 'true' && req.query.edit !== 'false') {
    return res.redirect('/');
  }

  const editMode = req.query.edit === 'true';

  const { productId } = req.params;
  try {
    const product = await Product.findById(productId);
    if (!product) {
      return res.redirect('/');
    }

    res.render('admin/edit-product', {
      pageTitle: 'Edit Product',
      path: '/admin/edit-product',
      editing: editMode,
      product,
    });
  } catch (err) {
    error(err);
  }
};

export const postEditProduct: RequestHandler<
  unknown,
  unknown,
  { [key: string]: string }
> = async (req, res) => {
  const {
    id: productId,
    title: updatedTitle,
    price: updatedPrice,
    description: updatedDescription,
  } = req.body;

  try {
    const product = await Product.findById(productId);
    if (product) {
      product.title = updatedTitle;
      product.price = Number(updatedPrice);
      product.description = updatedDescription;
      product.save();
      res.redirect('/admin/products');
    }
  } catch (err) {
    error(err);
  }
};

export const postDeleteProduct: RequestHandler<
  unknown,
  unknown,
  { [key: string]: string }
> = async (req, res) => {
  const { id: productId } = req.body;
  try {
    await Product.findByIdAndDelete(productId);
    res.redirect('/admin/products');
  } catch (err) {
    error(err);
  }
};
