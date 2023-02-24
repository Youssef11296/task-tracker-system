// models
import Package from '../../models/packageModel.js';
// modules
import asyncHandler from 'express-async-handler';

//* CREATE PLAN
const createPackage = asyncHandler (async (req, res) => {
  try {
    const {packageName, packageDescription, packagePrice} = req.body;
    // basic validation
    if (!packageName || !packageDescription)
      throw new Error ('PLease, input all fields.');
    if (packagePrice < 0)
      throw new Error (
        'PLan price must be a valid number and can not be less than 0.'
      );
    // checking if the package already exists
    const isExistedPackage = await Package.findOne ({packageName});
    if (isExistedPackage)
      throw new Error (
        'Package with the same name already exist. Please, try with another package name.'
      );
    // creating new package
    const newPackage = await Package.create ({
      packageName,
      packageDescription,
      packagePrice,
    });
    // response
    res.status (201).json ({
      success: true,
      message: 'Successfully created.',
      data: newPackage,
    });
  } catch (error) {
    res.status (400).json ({success: false, message: error.message});
  }
});

//* UPDATE PLAN
const updatePackage = asyncHandler (async (req, res) => {
  try {
    const {packageId} = req.params;
    // getting the package
    const packageData = await Package.findOne ({_id: packageId});
    console.log ({packageData, packageId});
    if (!packageData) throw new Error ('Package does not exist.');
    // updating the package
    const updatedPackage = await Package.findByIdAndUpdate (
      packageId,
      req.body,
      {
        new: true,
      }
    );
    // response
    res.status (201).json ({
      success: true,
      message: 'Successfully updated.',
      data: updatedPackage,
    });
  } catch (error) {
    res.status (400).json ({success: false, message: error.message});
  }
});

//* DELETE PLAN
const deletePackage = asyncHandler (async (req, res) => {
  try {
    const {packageId} = req.params;
    // checking if the package exist
    const packageData = await Package.findOne ({_id: packageId});
    if (!packageData) throw new Error ('PLan not exists. It may be deleted');
    // deleteing the package
    await packageData.delete ();
    // response
    res.status (201).json ({success: true, message: 'Successfully deleted!'});
  } catch (error) {
    res.status (400).json ({success: false, messgage: error.message});
  }
});

//* EXPORTS
export {createPackage, deletePackage, updatePackage};
