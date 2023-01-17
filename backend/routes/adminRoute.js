import {Router} from 'express';
import {
  reviewVerification,
  verifyUser,
} from '../controllers/adminController.js';

const router = Router ();

router.get ('/verifications', reviewVerification);
router.post ('/verifications', verifyUser);

export default router;
