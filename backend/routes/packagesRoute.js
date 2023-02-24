import {Router} from 'express';
import {
  choosePackage,
  getAllPackages,
} from '../controllers/packagesController.js';
import {isAuth} from '../middlewares/authMiddleware.js';

const router = Router ();

router.get ('/', getAllPackages);
router.patch ('/choose', isAuth, choosePackage);

export default router;
