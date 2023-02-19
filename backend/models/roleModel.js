import {Schema, model} from 'mongoose';

const roleSchema = new Schema (
  {
    roleName: {
      type: String,
      minlength: 3,
      maxlength: 30,
      required: true,
    },
    roleDescription: {
      type: String,
      minlength: 10,
      maxlength: 300,
      required: true,
    },
  },
  {timestamps: true}
);

export default model ('Role', roleSchema);
