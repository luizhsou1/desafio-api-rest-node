import { Router } from 'express';
import { registerUserController } from '../users/controllers/register';
import { loginController } from '../users/controllers/login';
import { updateUserController } from '../users/controllers/update-user';

const router = Router();

router.post('/register', (req, res) => registerUserController.handle(req, res));
router.post('/login', (req, res) => loginController.handle(req, res));
router.put('/users', (req, res) => updateUserController.handle(req, res));

export { router };
