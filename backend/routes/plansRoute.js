import {Router} from 'express';
import {getAllPlans} from '../controllers/plansController.js';

const router = Router ();

router.get ('/', getAllPlans);

export default router;
