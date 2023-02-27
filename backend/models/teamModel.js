import {Schema, model} from 'mongoose';

const teamSchema = new Schema (
  {
    teamName: {
      type: String,
      required: true,
      unique: true,
      minLength: [3, 'Team name must contain 3 letters at least.'],
      maxLength: [30, 'Team name can not contain more than 30 letters.'],
    },
    teamDescription: {
      type: String,
      required: true,
      minLength: [10, 'Team description must contain 10 letters at least.'],
      maxLength: [
        300,
        'Team description can not contain more than 300 letters.',
      ],
    },
    industry: {
      type: String,
      required: true,
    },
    teamOwnerId: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    teamMembersIds: [
      {
        type: Schema.Types.ObjectId,
        ref: 'User',
      },
    ],
  },
  {
    timestamps: true,
  }
);

export default model ('Team', teamSchema);
