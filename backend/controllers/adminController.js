import User from '../models/userModel.js';
import VerificationRequest from '../models/verificationRequestModel.js';
import asyncHandler from 'express-async-handler';

//* For Admin Only
const reviewVerification = asyncHandler (async (req, res) => {
  try {
    const {verificationRequestId} = req.params;

    const verificationRequest = await VerificationRequest.findOne ({
      _id: verificationRequestId,
    });

    const user = await User.findOne ({_id: verificationRequest.userId});
    if (!user) throw new Error ('User not found, or may be deleted!');

    res.status (200).json ({
      success: true,
      data: {
        user,
        nationalIdNum: verificationRequest.nationalIdNum,
        nationalIdImg: verificationRequest.nationalIdImg,
      },
    });
  } catch (error) {
    res.status (400).json ({success: false, message: error.message});
  }
});

const verifyUser = asyncHandler (async (req, res) => {
  try {
    const {verificationRequestId} = req.params;

    const verificationRequest = await VerificationRequest.findOne ({
      _id: verificationRequestId,
    });

    const user = await User.findOne ({_id: verificationRequest.userId});
    if (!user) throw new Error ('User not found, or may be deleted!');

    const updatedUser = await User.findByIdAndUpdate (
      user.userId,
      {
        $set: {
          verified: true,
          verifications: {
            nationalIdNum: verificationRequest.nationalIdNum,
            nationalIdImg: verificationRequest.nationalIdImg,
          },
        },
      },
      {new: true}
    );

    res.status (201).json ({
      success: true,
      message: 'Successfully verified.',
      data: updatedUser,
    });
  } catch (error) {
    res.status (400).json ({success: false, message: error.message});
  }
});

export {reviewVerification, verifyUser};
