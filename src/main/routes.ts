import { Router } from 'express';
import { registerUserController } from '../users/controllers/register';
import { loginController } from '../users/controllers/login';
import { updateUserController } from '../users/controllers/update-user';

const router = Router();

router.post('/register', (req, res, next) => registerUserController.handle(req, res, next));
router.post('/login', (req, res, next) => loginController.handle(req, res, next));
router.put('/users', (req, res, next) => updateUserController.handle(req, res, next));

export { router };
