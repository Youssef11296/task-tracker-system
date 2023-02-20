import {Router} from 'express';
import {
  reviewVerification,
  verifyUser,
} from '../../controllers/admin/adminVerificationsController.js';

const router = Router ();

router.get ('/verifications/:verificationRequestId', reviewVerification);
router.post ('/verifications/:verificationRequestId', verifyUser);

export default router;
