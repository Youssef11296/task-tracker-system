import {Router} from 'express';
import {
  createPlan,
  deletePlan,
  updatePlan,
} from '../../controllers/admin/plansController';
import {isAdmin} from '../../middlewares/adminMiddleware';
import {isAuth} from '../../middlewares/authMiddleware';

const router = Router ();

router.post ('/', isAuth, isAdmin, createPlan);
router.patch ('/:planId', isAuth, isAdmin, updatePlan);
router.delete ('/:planId', isAuth, isAdmin, deletePlan);

export default router;
