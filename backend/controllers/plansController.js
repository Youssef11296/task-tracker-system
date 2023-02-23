// models
import Plan from '../models/planModel.js';
// modules
import asyncHandler from 'express-async-handler';

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
    const {user, body: {planId}} = req;
    // checking if the plan exists
    const plan = await Plan.findOne ({_id: planId});
    if (!plan) throw new Error ('Plan does not exist.');
    // updating user plan
    const updatedUser = await user.$set ('planId', planId);
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
