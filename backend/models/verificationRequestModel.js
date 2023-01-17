import {Schema, model} from 'mongoose';

const verificationRequestSchema = new Schema (
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    nationalIdNum: {
      type: String,
      minlength: 14,
      required: true,
    },
    nationalIdImg: {
      type: Buffer,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default model ('VerificationRequest', verificationRequestSchema);
