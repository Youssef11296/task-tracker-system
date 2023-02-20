import {Router} from 'express';
import {
  createPlan,
  deletePlan,
  updatePlan,
} from '../../controllers/admin/adminPlansController.js';
import {isAdmin} from '../../middlewares/adminMiddleware.js';
import {isAuth} from '../../middlewares/authMiddleware.js';

const router = Router ();

router.post ('/', isAuth, isAdmin, createPlan);
router.patch ('/:planId', isAuth, isAdmin, updatePlan);
router.delete ('/:planId', isAuth, isAdmin, deletePlan);

export default router;
