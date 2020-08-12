import { UsersRepositoryFile } from '@/users/repositories/implementations/users-repository-file';
import { jwtSecret, jwtExpirationTime } from '@/configs/env';
import { JsonWebTokenImpl } from '@/providers/jwt/json-web-token-impl';
import { Login } from '@/users/domain/use-cases/login';
import { LoginController } from './login-controller';

const usersRepoFile = new UsersRepositoryFile();
const jsonWebTokenImpl = new JsonWebTokenImpl(jwtSecret, jwtExpirationTime, usersRepoFile);

const login = new Login(
  usersRepoFile,
  jsonWebTokenImpl,
);

const loginCOntroller = new LoginController(login);

export { loginCOntroller };
