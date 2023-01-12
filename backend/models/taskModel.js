import {Schema, model} from 'mongoose';
import {TASK_SATUS} from '../utils/contants.js';

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
    status: {
      type: String,
      default: TASK_SATUS.TODO,
    },
    userId: {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
  },
  {timestamps: true}
);

export default model ('Task', taskSchema);
