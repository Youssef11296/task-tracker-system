import {Router} from 'express';
import {createTeam} from '../controllers/teamsController.js';
import {isAuth} from '../middlewares/authMiddleware.js';

const router = Router ();

router.post ('/', isAuth, createTeam);

export default router;
