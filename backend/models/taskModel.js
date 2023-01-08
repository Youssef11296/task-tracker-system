import {Schema, model} from 'mongoose';

const taskSchema = new Schema (
  {
    taskName: {
      type: String,
      required: true,
      minlength: 2,
      maxlength: 30,
      unique: true,
    },
    description: {
      type: String,
      required: true,
      unique: true,
    },
    userId: {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
  },
  {timestamps: true}
);

export default model ('Task', taskSchema);
