import {Router} from 'express';
import {choosePlan, getAllPlans} from '../controllers/plansController.js';
import {isAuth} from '../middlewares/authMiddleware.js';

const router = Router ();

router.get ('/', getAllPlans);
router.patch ('/update', isAuth, choosePlan);

export default router;
