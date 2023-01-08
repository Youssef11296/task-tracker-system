import {Router} from 'express';
import {loginUser, registerUser} from '../controllers/authController.js';
import {isValidUser} from '../middlewares/validationMiddleware.js';

const router = Router ();

router.post ('/register', isValidUser, registerUser);
router.post ('/login', loginUser);

export default router;
