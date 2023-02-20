import {Router} from 'express';
import {choosePlan, getAllPlans} from '../controllers/plansController.js';

const router = Router ();

router.get ('/', getAllPlans);
router.patch ('/update', choosePlan);

export default router;
