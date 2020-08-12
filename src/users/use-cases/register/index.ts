import { UsersRepositoryFile } from '@/users/repositories/implementations/users-repository-file';
import { jwtSecret, jwtExpirationTime } from '@/configs/env';
import { JsonWebTokenImpl } from '@/providers/jwt/json-web-token-impl';
import { RegisterUser } from './register-user';
import { RegisterUserController } from './register-user-controller';

const usersRepoFile = new UsersRepositoryFile();
const jsonWebTokenImpl = new JsonWebTokenImpl(jwtSecret, jwtExpirationTime, usersRepoFile);

const registerUser = new RegisterUser(
  usersRepoFile,
  jsonWebTokenImpl,
  '127.0.0.1', // TODO Refazer antes de entregar
);

const registerUserController = new RegisterUserController(registerUser);

export { registerUserController };
