// models
import Plan from '../models/planModel.js';
// modules
import asyncHandler from 'express-async-handler';
import User from '../models/userModel.js';

//* GET ALL PLANS
const getAllPlans = asyncHandler (async (req, res) => {
  try {
    const plans = await Plan.find ({});
    res.status (200).json ({success: true, data: plans});
  } catch (error) {
    res.status (400).json ({success: false, message: error.message});
  }
});

//* CHOOSE PLAN
const choosePlan = asyncHandler (async (req, res) => {
  try {
    const {userId, planId} = req.body;
    // checking if the plan exists
    const plan = await Plan.findOne ({_id: planId});
    if (!plan) throw new Error ('Plan does not exist.');
    // checking if the user exists
    const user = await User.findOne ({_id: userId});
    if (!user) throw new Error ('User does not exist.');
    // updating user plan
    const updatedUser = await user.update (planId, planId);
    // response
    res.status (201).json ({
      success: true,
      message: 'Your plan has been successfully updated!',
      data: updatedUser,
    });
  } catch (error) {
    res.status (400).json ({success: false, message: error.message});
  }
});

export {getAllPlans, choosePlan};
