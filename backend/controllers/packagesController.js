// models
import Package from '../models/packageModel.js';
// modules
import asyncHandler from 'express-async-handler';

//* GET ALL PACKAGES
const getAllPackages = asyncHandler (async (req, res) => {
  try {
    const packages = await Package.find ({});
    res.status (200).json ({success: true, data: packages});
  } catch (error) {
    res.status (400).json ({success: false, message: error.message});
  }
});

//* CHOOSE PACKAGE
const choosePackage = asyncHandler (async (req, res) => {
  try {
    const {user, body: {packageId}} = req;
    // checking if the package exists
    const packageData = await Package.findOne ({_id: packageId});
    if (!packageData) throw new Error ('Package does not exist.');
    // updating user package
    const updatedUser = await user.$set ('packageId', packageId);
    // response
    res.status (201).json ({
      success: true,
      message: 'Your package has been successfully updated!',
      data: updatedUser,
    });
  } catch (error) {
    res.status (400).json ({success: false, message: error.message});
  }
});

export {getAllPackages, choosePackage};
