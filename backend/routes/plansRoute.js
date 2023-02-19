import {Router} from 'express';
import {getAllPlans} from '../controllers/plansController';

const router = Router ();

router.get ('/', getAllPlans);

export default router;
