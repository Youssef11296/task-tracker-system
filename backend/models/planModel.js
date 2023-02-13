import {Schema, model} from 'mongoose';

const planSchema = new Schema (
  {
    roleName: {
      type: String,
      minlength: [3, 'Plan name must contain 3 letter at least.'],
      maxlength: [50, 'Plan name can not contain more than 50 letters.'],
      required: true,
    },
    roleDescription: {
      type: String,
      minlength: [10, 'Plan description must contain 10 letter at least.'],
      maxlength: [
        300,
        'Plan description can not contain more than 300 letters.',
      ],
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default model ('Plan', planSchema);
