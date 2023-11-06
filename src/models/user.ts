import { Schema, Document, model, ObjectId } from 'mongoose';

export interface UserDocument extends Document {
  name: string;
  email: string;
  cart: {
    items: [
      {
        productId: ObjectId;
        quantity: number;
      },
    ];
  };
}

const userSchema = new Schema<UserDocument>({
  name: { type: String, required: true },
  email: { type: String, required: true },
  cart: {
    items: [
      {
        productId: {
          type: Schema.Types.ObjectId,
          ref: 'Product',
          required: true,
        },
        quantity: { type: Number, required: true },
      },
    ],
  },
});

const UserModel = model<UserDocument>('User', userSchema);

export default UserModel;
