// models
import Plan from '../models/planModel.js';
// modules
import asyncHandler from 'express-async-handler';

// get all plans
const getAllPlans = asyncHandler (async (req, res) => {
  try {
    const plans = await Plan.find ({});
    res.status (200).json ({success: true, data: plans});
  } catch (error) {
    res.status (400).json ({success: false, message: error.message});
  }
});

export {getAllPlans};
