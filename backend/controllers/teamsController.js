// models
import Team from '../models/teamModel.js';
// modules
import asyncHandler from 'express-async-handler';

// TODO: USER CAN NOT CREATE A TEAM IF HE IS NOT VERIFIED YET.

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
    // todo: checking if the user is not verified (UN-COMMENT)
    // const isVerifiedUser = user.verified;
    // if (!isVerifiedUser)
    //   throw new Error (
    //     'Sorry, you are not permitted to create a team, your account is not verified yet.'
    //   );
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

//* Edit team
const editTeam = asyncHandler (async (req, res) => {
  try {
    const {
      user,
      params: {teamId},
      body: {teamName, teamDescription, industry},
    } = req;
    // checking if the team is exist
    const team = await Team.findOne ({_id: teamId});
    if (!team) throw new Error ('Team does not exist.');
    // checking if the user is the team owner
    const isTeamOwner = team.teamOwnerId.toString () === user._id.toString ();
    if (!isTeamOwner) {
      throw new Error (
        'Sorry, you are not permitted to update in this team, you are not the team owner.'
      );
    }
    // editing the team
    if (teamName) team.$set ('teamName', teamName);
    if (teamDescription) team.$set ('teamDescription', teamDescription);
    if (industry) team.$set ('industry', industry);
    // saving updates
    await team.save ();
    // response
    res.status (201).json ({
      success: true,
      message: 'Your team has been edited successfully.',
      data: team,
    });
  } catch (error) {
    res.status (400).json ({success: false, message: error.message});
  }
});

//* Delete team
const deleteTeam = asyncHandler (async (req, res) => {
  try {
    const {user, params: {teamId}} = req;
    // checking if the team is exist
    const team = await Team.findOne ({_id: teamId});
    if (!team) throw new Error ('Team does not exist.');
    // checking if the user is the team owner
    const isTeamOwner = team.teamOwnerId.toString () === user._id.toString ();
    if (!isTeamOwner) {
      throw new Error (
        'Sorry, you are not permitted to delete this team, you are not the team owner.'
      );
    }
    // deleting the team
    await team.delete ();
    // response
    res.status (201).json ({
      success: true,
      message: 'Your team has been deleted successfully.',
    });
  } catch (error) {
    res.status (400).json ({success: false, message: error.message});
  }
});

export {createTeam, editTeam, deleteTeam};
