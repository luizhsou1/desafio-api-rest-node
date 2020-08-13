import { UsersRepositoryFile } from '../../users/repositories/implementations/users-repository-file';
import { JsonWebTokenError } from '../../shared/errors';
import { JsonWebTokenImpl } from '../../infra/jwt/json-web-token-impl';
import { jwtSecret, jwtExpirationTime } from '../configs/env';

// Middleware de autenticação
export const auth = async (req, res, next) => {
  const acessToken: string = req.headers.authorization;

  if (!acessToken) {
    return res
      .status(401)
      .json({
        error: 'JsonWebTokenError',
        message: 'Token não fornecido no parâmetro Authorization do header da requisição',
      });
  }

  const jwt = new JsonWebTokenImpl(jwtSecret, jwtExpirationTime, new UsersRepositoryFile());
  let user;
  try {
    user = await jwt.validate(acessToken);
  } catch (error) {
    const err = { error: 'JsonWebTokenError', message: '', expiredAt: undefined };
    if (error.name === 'TokenExpiredError') {
      err.message = 'Token Jwt Expirado';
      err.expiredAt = error.expiredAt;
    } else err.message = error.message === 'invalid token' ? 'Token inválido' : error.message;
    return res
      .status(401)
      .json(err);
  }
  req.email = user.email.value;
  return next();
};
