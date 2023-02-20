import {Schema, model} from 'mongoose';

const planSchema = new Schema (
  {
    planName: {
      type: String,
      minlength: 3,
      maxlength: 30,
      required: true,
    },
    planDescription: {
      type: String,
      minlength: 10,
      maxlength: 300,
      required: true,
    },
    planPrice: {
      type: Number,
      required: true,
    },
    isOnSale: {
      type: Boolean,
      default: false,
    },
  },
  {timestamps: true}
);

export default model ('Plan', planSchema);
