import {Router} from 'express';
import {
  createRole,
  deleteRole,
  getAllRoles,
  updateRole,
} from '../../controllers/admin/adminRolesController.js';
import {isAuth} from '../../middlewares/authMiddleware.js';
import {isAdmin} from '../../middlewares/adminMiddleware.js';

const router = Router ();

router.get ('/', isAuth, isAdmin, getAllRoles);
router.post ('/', isAuth, isAdmin, createRole);
router.patch ('/:roleId', isAuth, isAdmin, updateRole);
router.delete ('/:roleId', isAuth, isAdmin, deleteRole);

export default router;
