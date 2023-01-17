import VerificationRequest from '../models/verificationRequestModel.js';
import asyncHandler from 'express-async-handler';

// controllers
const sendVerificationRequest = asyncHandler (async (req, res) => {
  try {
    const {nationalIdNum, nationalIdImg} = req.body;
    const {user} = req;
    const verificationRequest = await VerificationRequest.create ({
      userId: user._id,
      nationalIdNum,
      nationalIdImg,
    });
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
