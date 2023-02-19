// models
import User from '../models/userModel.js';
import Plan from '../models/planModel.js';
import Role from '../models/roleModel.js';
import VerificationRequest from '../models/verificationRequestModel.js';
// modules
import asyncHandler from 'express-async-handler';

//* VERIFICATIONS CONTROLLER
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

//* PLANS CONTROLLERS
const createPlan = asyncHandler (async (req, res) => {
  try {
    const {user, body: {planName, planDescription, planPrice}} = req;
    // checking if the user is an admin
    const userRole = await Role.findOne ({_id: user.roleId});
    const isAdmin = userRole.roleName === 'ADMIN';
    if (!isAdmin)
      throw new Error (
        "Sorry, you're not as admin, you can not process with this operation."
      );
    // checking if the plan already exists
    const isExistedPlan = await Plan.findOne ({planName});
    if (isExistedPlan)
      throw new Error (
        'Plan with the same name already exist. Please, try with another plan name.'
      );
    // creating new plan
    const newPlan = await PLan.create ({
      planName,
      planDescription,
      planPrice,
    });
    // response
    res
      .status (201)
      .json ({success: true, message: 'Successfully created.', data: newPlan});
  } catch (error) {
    res.status (400).json ({success: false, message: error.message});
  }
});

export {reviewVerification, verifyUser, createPlan};
