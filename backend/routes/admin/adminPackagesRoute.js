import {Router} from 'express';
import {
  createPackage,
  deletePackage,
  updatePackage,
} from '../../controllers/admin/adminPackagesController.js';
import {isAdmin} from '../../middlewares/adminMiddleware.js';
import {isAuth} from '../../middlewares/authMiddleware.js';

const router = Router ();

router.post ('/', isAuth, isAdmin, createPackage);
router.patch ('/:packageId', isAuth, isAdmin, updatePackage);
router.delete ('/:packageId', isAuth, isAdmin, deletePackage);

export default router;
