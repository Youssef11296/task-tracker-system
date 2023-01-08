import {Router} from 'express';
import {getMe, loginUser, registerUser} from '../controllers/authController.js';
import {isValidUser} from '../middlewares/validationMiddleware.js';
import {isAuth} from '../middlewares/authMiddleware.js';

const router = Router ();

router.post ('/register', isValidUser, registerUser);
router.post ('/login', loginUser);
router.get ('/me', isAuth, getMe);

export default router;
