import authController from '../controllers/auth.controller';
import Router from 'express';

const router = Router();

router.post('/signup', authController.signUp);
router.post('/login', authController.login);
router.get('/verify', authController.verifyToken);

export default router;