import {Router} from 'express';
import {
  createRole,
  deleteRole,
  updateRole,
} from '../../controllers/admin/adminRolesController.js';
import {isAuth} from '../../middlewares/authMiddleware.js';
import {isAdmin} from '../../middlewares/adminMiddleware.js';

const router = Router ();

router.post ('/', isAuth, isAdmin, createRole);
router.patch ('/:roleId', isAuth, isAdmin, updateRole);
router.delete ('/:roleId', isAuth, isAdmin, deleteRole);

export default router;
