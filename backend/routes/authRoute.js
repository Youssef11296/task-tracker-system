import {Router} from 'express';
import {loginUser, registerUser} from '../controllers/authController';

const router = Router ();

router.get ('/register', registerUser);
router.get ('/login', loginUser);

export default router;
