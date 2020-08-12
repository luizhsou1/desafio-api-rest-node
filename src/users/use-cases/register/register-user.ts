import { UseCase } from '@/shared/use-case';
import { User } from '@/users/entities/user';
import { ValidationError } from '@/shared/errors';
import { IUsersRepository } from '@/users/repositories/i-users-repository';
import { IJsonWebToken } from '@/providers/jwt/i-json-web-token';
import { RegisterUserDto } from './register-user-dto';
import { LoginDtoOutput } from '../login/login-dto';

/**
 * Registra usuário com informações básicas, para que posteriormente ele possa atualizar suas informações
 */
export class RegisterUser implements UseCase<RegisterUserDto, LoginDtoOutput> {
  constructor(
    private readonly usersRepo: IUsersRepository,
    private readonly jwt: IJsonWebToken,
    private readonly ip: string,
  ) {}

  async execute(data?: RegisterUserDto): Promise<LoginDtoOutput> {
    const user = await User.create({
      email: data.email,
      password: data.password,
      ip: this.ip,
    });
    await this.usersRepo.save(user);

    const acessToken = await this.jwt.generate(user);

    return { user: user.toDto(), acessToken };
  }
}
