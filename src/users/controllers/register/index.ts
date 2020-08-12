import { RegisterUserController } from './register-user-controller';
import { UsersRepositoryFile } from '../../repositories/implementations/users-repository-file';
import { JsonWebTokenImpl } from '../../../infra/jwt/json-web-token-impl';
import { jwtSecret, jwtExpirationTime } from '../../../configs/env';
import { RegisterUser } from '../../domain/use-cases/register-user';

const usersRepoFile = new UsersRepositoryFile();
const jsonWebTokenImpl = new JsonWebTokenImpl(jwtSecret, jwtExpirationTime, usersRepoFile);

const registerUser = new RegisterUser(
  usersRepoFile,
  jsonWebTokenImpl,
  '127.0.0.1', // TODO Refazer antes de entregar
);

const registerUserController = new RegisterUserController(registerUser);

export { registerUserController };
