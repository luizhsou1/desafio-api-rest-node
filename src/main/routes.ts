import { Router } from 'express';
import { updateUserController } from '@/users/controllers/update-user';
import { loginController } from '@/users/controllers/login';
import { registerUserController } from '@/users/controllers/register';

const router = Router();

router.post('/register', (req, res) => registerUserController.handle(req, res));
router.post('/login', (req, res) => loginController.handle(req, res));
router.put('/users', (req, res) => updateUserController.handle(req, res));

export { router };
