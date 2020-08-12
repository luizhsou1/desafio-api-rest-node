import { UseCase } from '@/shared/use-case';
import { NotFoundError } from '@/shared/errors';
import { IUsersRepository } from '@/users/repositories/i-users-repository';
import { IJsonWebToken } from '@/providers/jwt/i-json-web-token';
import { UserDto } from '@/users/domain/entities/user';
import { InvalidPasswordError } from '../value-objects';

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
