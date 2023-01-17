// modules
import asyncHandler from 'express-async-handler';
// models
import Task from '../models/taskModel.js';
import User from '../models/userModel.js';

// controllers
const getTasks = asyncHandler (async (req, res) => {
  try {
    const {user} = req; // comming from isAuth middleware
    const tasks = await Task.find ({userId: user._id});
    res.status (200).json ({success: true, data: tasks});
  } catch (error) {
    res.status (400).json ({success: false, message: error.message});
  }
});

const createTask = asyncHandler (async (req, res) => {
  try {
    const {taskName, description, status} = req.body;
    const {user} = req; // comming from isAuth middleware

    if (!taskName || taskName.length < 3)
      throw new Error (
        'Task name is required, and must contain 3 letters at least.'
      );
    if (!description || description < 10)
      throw new Error (
        'Task description is required, and must contain 10 letters at least.'
      );

    const isExistedTask = await Task.findOne ({userId: user._id, taskName});
    if (isExistedTask)
      return res
        .status (400)
        .json ({success: false, message: 'You already added this task!'});

    const newTask = await Task.create ({
      taskName,
      description,
      status,
      userId: user._id,
    });

    res
      .status (201)
      .json ({success: true, message: 'Successfully created.', data: newTask});
  } catch (error) {
    res.status (400).json ({success: false, message: error.message});
  }
});

const deleteTask = asyncHandler (async (req, res) => {
  try {
    const {taskId} = req.params;
    const {user} = req;

    const task = await Task.findOne ({_id: taskId});
    if (!task) throw new Error ('Task not found.');

    const userData = await User.findOne ({_id: user._id});
    if (!userData) throw new Error ('User not found.');

    if (task.userId.toString () !== user._id.toString ())
      throw new Error ("You're not authorized to manage this content.");

    await Task.findByIdAndDelete (taskId);
    res.status (201).json ({success: true, message: 'Successfully deleted.'});
  } catch (error) {
    res.status (400).json ({success: false, message: error.message});
  }
});

const updateTask = asyncHandler (async (req, res) => {
  try {
    const {taskId} = req.params;
    const {user} = req;

    const task = await Task.findOne ({_id: taskId});
    if (!task) throw new Error ('Task not found.');

    const userData = await User.findOne ({_id: user._id});
    if (!userData) throw new Error ('User not found.');

    if (task.userId.toString () !== user._id.toString ())
      throw new Error ("You're not authorized to manage this content.");

    // getting list of tasks that have the same name of updated task
    const sameNameTasks = await Task.find ({
      userId: user._id,
      taskName: req.body.taskName,
    });
    const isSameId = id => (id === taskId ? true : false);
    // check if there is a task with same updated task name
    if (sameNameTasks.length > 0) {
      sameNameTasks.find (task => {
        if (!isSameId (task._id))
          return res
            .status (400)
            .json ({success: false, message: 'You already added this task!'});
      });
    }

    // if no tasks has same updated task name =>> updating the task
    const updatedTask = await Task.findByIdAndUpdate (taskId, req.body, {
      new: true,
    });
    res.status (201).json ({
      success: true,
      message: 'Successfully updated.',
      data: updatedTask,
    });
  } catch (error) {
    res.status (400).json ({success: false, message: error.message});
  }
});

export {getTasks, createTask, deleteTask, updateTask};
