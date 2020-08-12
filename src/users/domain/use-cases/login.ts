import { InvalidPasswordError } from '../value-objects';
import { UserDto } from '../entities/user';
import { UseCase } from '../../../shared/use-case';
import { IUsersRepository } from '../../repositories/i-users-repository';
import { IJsonWebToken } from '../../../infra/jwt/i-json-web-token';
import { NotFoundError } from '../../../shared/errors';

export interface LoginDto {
  email: string,
  password: string,
}

export interface LoginDtoOutput {
  user: UserDto,
  acessToken: string,
}

/**
 * Faz login do usuário
 */
export class Login implements UseCase<LoginDto, LoginDtoOutput> {
  constructor(
    private readonly usersRepo: IUsersRepository,
    private readonly jwt: IJsonWebToken,
  ) {}

  async execute(data?: LoginDto): Promise<LoginDtoOutput> {
    const user = await this.usersRepo.findByEmail(data.email);

    if (!user) {
      throw new NotFoundError('UserNotFoundError', 'Usuário não encontrado');
    }

    if (!user.password.isEqual(data.password)) {
      throw new InvalidPasswordError('Usuário ou senha inválido');
    }

    const acessToken = await this.jwt.generate(user);

    return { user: user.toDto(), acessToken };
  }
}
