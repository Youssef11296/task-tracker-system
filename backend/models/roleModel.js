import {Schema, model} from 'mongoose';

const roleSchema = new Schema (
  {
    roleName: {
      type: String,
      required: true,
    },
    roleDescription: {
      type: String,
      minlength: [10, 'Role description must contain 10 letter at least.'],
      maxlength: [
        300,
        'Role description can not contain more than 300 letters.',
      ],
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default model ('Role', roleSchema);
