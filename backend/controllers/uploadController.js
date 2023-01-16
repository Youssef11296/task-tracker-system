import asyncHandler from 'express-async-handler';

const uploadFile = asyncHandler (async (req, res) => {
  try {
    if (req.files) {
      console.log ({files});
    }
  } catch (error) {
    res.status (400).json ({success: false, message: error.message});
  }
});

export {uploadFile};
