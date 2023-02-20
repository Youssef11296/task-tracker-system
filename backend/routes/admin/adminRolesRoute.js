import {Router} from 'express';
import {
  createRole,
  deleteRole,
  updateRole,
} from '../../controllers/admin/adminRolesController';

const router = Router ();

router.post ('/', createRole);
router.patch ('/:roleId', updateRole);
router.delete ('/:roleId', deleteRole);

export default router;
