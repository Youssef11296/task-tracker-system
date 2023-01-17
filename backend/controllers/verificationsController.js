import VerificationRequest from '../models/verificationRequestModel.js';
import User from '../models/userModel.js';
import asyncHandler from 'express-async-handler';
import {USER_VERIFICATION_STATUS} from '../utils/contants.js';

// controllers
const sendVerificationRequest = asyncHandler (async (req, res) => {
  try {
    const {nationalIdNum, nationalIdImg} = req.body;
    const {user} = req;

    const isInPendingVerification = await VerificationRequest.findOne ({
      userId: user._id,
    });

    if (isInPendingVerification)
      return res.status (400).json ({
        success: false,
        message: 'You already sent a verification request still in pending',
      });

    const verificationRequest = await VerificationRequest.create ({
      userId: user._id,
      nationalIdNum,
      nationalIdImg,
    });

    const updatedUser = await User.findByIdAndUpdate (
      user._id,
      {
        $set: {verificationRequestStatus: USER_VERIFICATION_STATUS.WAITING},
      },
      {new: true}
    );
    res.status (201).json ({
      success: true,
      data: verificationRequest,
      message: 'Successfully sent verification request, some Admin will review and confirm it asap.',
    });
  } catch (error) {
    res.status (400).json ({success: false, message: error.message});
  }
});

export {sendVerificationRequest};
