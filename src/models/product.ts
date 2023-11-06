import { Schema, Document, model } from 'mongoose';

// Define the structure of a product document
interface ProductDocument extends Document {
  title: string;
  price: number;
  description: string;
  image: Buffer;
}

// Define the schema for the product collection
const productSchema = new Schema<ProductDocument>({
  // Title of the product
  title: { type: String, required: true },

  // Price of the product
  price: { type: Number, required: true },

  // Description of the product
  description: { type: String, required: true },

  // Binary image data of the product
  image: { type: Buffer, required: true },
});

// Create a model based on the product schema
const ProductModel = model<ProductDocument>('Product', productSchema);

export default ProductModel;
