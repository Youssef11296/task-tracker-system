// models
import Plan from '../../models/planModel.js';
// modules
import asyncHandler from 'express-async-handler';

//* CREATE PLAN
const createPlan = asyncHandler (async (req, res) => {
  try {
    const {planName, planDescription, planPrice} = req.body;
    // basic validation
    if (!planName || !planDescription || !planPrice.toString ())
      throw new Error ('PLease, input all fields.');
    // checking if the plan already exists
    const isExistedPlan = await Plan.findOne ({planName});
    if (isExistedPlan)
      throw new Error (
        'Plan with the same name already exist. Please, try with another plan name.'
      );
    // creating new plan
    const newPlan = await Plan.create ({
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

//* UPDATE PLAN
const updatePlan = asyncHandler (async (req, res) => {
  try {
    const {planId} = req.params;
    // getting the plan
    const plan = await Plan.findOne ({_id: planId});
    if (!plan) throw new Error ('Plan does not exist.');
    // updating the plan
    const updatedPlan = await plan.update (req.body, {new: true});
    // response
    res.status (201).json ({
      success: true,
      message: 'Successfully updated.',
      data: updatedPlan,
    });
  } catch (error) {
    res.status (400).json ({success: false, message: error.message});
  }
});

//* DELETE PLAN
const deletePlan = asyncHandler (async (req, res) => {
  try {
    const {planId} = req.params;
    // checking if the plan exist
    const plan = await Plan.findOne ({_id: planId});
    if (!plan) throw new Error ('PLan not exists. It may be deleted');
    // deleteing the plan
    await plan.delete ();
    // response
    res.status (201).json ({success: true, message: 'Successfully deleted!'});
  } catch (error) {
    res.status (400).json ({success: false, messgage: error.message});
  }
});

//* EXPORTS
export {createPlan, deletePlan, updatePlan};
