import Team from '../../models/teamModel.js';
import asyncHandler from 'express-async-handler';

const getAllTeams = asyncHandler (async (req, res) => {
  try {
    const teams = await Team.find ({});
    res.status (200).json ({success: true, data: teams});
  } catch (error) {
    res.status (400).json ({success: false, message: error.message});
  }
});

export {getAllTeams};
