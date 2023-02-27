import {Router} from 'express';
import {getAllTeams} from '../../controllers/admin/adminTeamsController.js';
import {isAuth} from '../../middlewares/authMiddleware.js';
import {isAdmin} from '../../middlewares/adminMiddleware.js';

const router = Router ();

router.get ('/', isAuth, isAdmin, getAllTeams);

export default router;
