import {Schema, model} from 'mongoose';
import {USER_VERIFICATION_STATUS} from '../utils/contants.js';

const userSchema = new Schema (
  {
    username: {
      type: String,
      required: true,
      minlength: 2,
      maxlength: 30,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    roleId: {
      type: Schema.Types.ObjectId,
      ref: 'Role',
      // required: true,
    },
    planId: {
      type: Schema.Types.ObjectId,
      ref: 'PLan',
      // required: true,
    },
    verifications: {
      nationalIdNum: {
        type: String,
        minlength: 14,
      },
      nationalIdImg: {
        type: Buffer,
      },
    },
    verificationRequestStatus: {
      type: String,
      default: USER_VERIFICATION_STATUS.NONE,
    },
    verified: {
      type: Boolean,
      default: false,
    },
    token: String,
  },
  {timestamps: true}
);

export default model ('User', userSchema);
