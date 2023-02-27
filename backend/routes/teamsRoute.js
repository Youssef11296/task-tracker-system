import {Router} from 'express';
import {
  createTeam,
  deleteTeam,
  editTeam,
} from '../controllers/teamsController.js';
import {isAuth} from '../middlewares/authMiddleware.js';

const router = Router ();

router.post ('/', isAuth, createTeam);
router.patch ('/:teamId', isAuth, editTeam);
router.delete ('/:teamId', isAuth, deleteTeam);

export default router;
