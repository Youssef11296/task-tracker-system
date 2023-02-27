// models
import Team from '../models/teamModel.js';
// modules
import asyncHandler from 'express-async-handler';

//* Create team
const createTeam = asyncHandler (async (req, res) => {
  try {
    const {user, body: {teamName, teamDescription, industry}} = req;
    // basic validation
    if (!teamName || teamName.length < 3 || teamName > 30)
      throw new Error (
        'Team name is required and must contain in range from 3 to 30 letters.'
      );
    if (
      !teamDescription ||
      teamDescription.length < 10 ||
      teamDescription.length > 300
    )
      throw new Error (
        'Team description is required and must contain from 10 to 300 letters.'
      );
    if (!industry) throw new Error ('Team industry is required.');
    // checking if the team already exists
    const isExistedTeam = await Team.findOne ({teamName});
    if (isExistedTeam)
      throw new Error (
        'Team with the same name exists. Please, try with another name.'
      );
    // creating a new team
    const newTeam = await Team.create ({
      teamName,
      teamDescription,
      industry,
      teamOwnerId: user._id.toString (),
    });
    // response
    res.status (201).json ({
      success: true,
      message: 'Your new team has been successfully created.',
      data: newTeam,
    });
  } catch (error) {
    res.status (400).json ({success: false, message: error.message});
  }
});

export {createTeam};
