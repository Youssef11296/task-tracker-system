import {Router} from 'express';
import {getAllUsers} from '../../controllers/admin/adminUsersController.js';
import {isAuth} from '../../middlewares/authMiddleware.js';
import {isAdmin} from '../../middlewares/adminMiddleware.js';

const router = Router ();

router.get ('/', isAuth, isAdmin, getAllUsers);

export default router;
