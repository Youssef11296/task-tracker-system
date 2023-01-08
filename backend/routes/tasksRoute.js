import {Router} from 'express';
import {
  createTask,
  deleteTask,
  getTasks,
  updateTask,
} from '../controllers/tasksController.js';
import {isAuth} from '../middlewares/authMiddleware.js';

const router = Router ();

router.get ('/', isAuth, getTasks);
router.post ('/', isAuth, createTask);
router.patch ('/:taskId', isAuth, updateTask);
router.delete ('/:taskId', isAuth, deleteTask);

export default router;
