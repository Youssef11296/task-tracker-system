import {Router} from 'express';
import {
  reviewVerification,
  verifyUser,
} from '../controllers/adminController.js';
import {
  sendVerificationRequest,
} from '../controllers/verificationsController.js';
import {isAuth} from '../middlewares/authMiddleware.js';

const router = Router ();

//* FOR ALL USERS
router.post ('/', isAuth, sendVerificationRequest);

//* JUST FOR ADMIN
router.get ('/:verificationRequestId', reviewVerification);
router.post ('/:verificationRequestId', verifyUser);

export default router;
