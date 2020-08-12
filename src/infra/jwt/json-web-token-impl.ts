import jwt from 'jsonwebtoken';
import { IUsersRepository } from '../../users/repositories/i-users-repository';
import { User } from '../../users/domain/entities/user';
import { IJsonWebToken, PayloadJwt } from './i-json-web-token';

export class JsonWebTokenError extends Error {
  constructor(message) {
    super(message);
    this.name = 'JsonWebTokenError';
  }
}

export class JsonWebTokenImpl implements IJsonWebToken {
  constructor(
    private readonly secret: string,
    private readonly expirationTime: string | number,
    private readonly usersRepo: IUsersRepository,
  ) {}

  async generate(user: User): Promise<string> {
    const payload: PayloadJwt = {
      sub: user.toDto().email,
    };
    return await jwt.sign(payload, this.secret, { expiresIn: this.expirationTime });
  }

  async validate(token: string): Promise<User> {
    const { sub } = jwt.verify(token, this.secret) as PayloadJwt;
    const user = await this.usersRepo.findByEmail(sub);
    if (!user) {
      throw new JsonWebTokenError('Usuário do JWT não está cadastrado');
    }
    return user;
  }
}
