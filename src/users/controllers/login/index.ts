import { LoginController } from './login-controller';
import { UsersRepositoryFile } from '../../repositories/implementations/users-repository-file';
import { JsonWebTokenImpl } from '../../../infra/jwt/json-web-token-impl';
import { jwtSecret, jwtExpirationTime } from '../../../main/env';
import { Login } from '../../domain/use-cases/login';

const usersRepoFile = new UsersRepositoryFile();
const jsonWebTokenImpl = new JsonWebTokenImpl(jwtSecret, jwtExpirationTime, usersRepoFile);

const login = new Login(
  usersRepoFile,
  jsonWebTokenImpl,
);

const loginController = new LoginController(login);

export { loginController };
