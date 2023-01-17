import {Router} from 'express';
import {
  reviewVerification,
  verifyUser,
} from '../controllers/adminController.js';

const router = Router ();

router.get ('/verifications/:verificationRequestId', reviewVerification);
router.post ('/verifications/:verificationRequestId', verifyUser);

export default router;
