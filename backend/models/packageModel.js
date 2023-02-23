import {Schema, model} from 'mongoose';

const packageSchema = new Schema (
  {
    packageName: {
      type: String,
      minlength: 3,
      maxlength: 30,
      required: true,
    },
    packageDescription: {
      type: String,
      minlength: 10,
      maxlength: 300,
      required: true,
    },
    packagePrice: {
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

export default model ('Package', packageSchema);
