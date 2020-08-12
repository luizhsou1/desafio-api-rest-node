import { UseCase } from '@/shared/use-case';
import { User } from '@/users/domain/entities/user';
import { IUsersRepository } from '@/users/repositories/i-users-repository';
import { IJsonWebToken } from '@/providers/jwt/i-json-web-token';
import { LoginDtoOutput } from './login';

export interface RegisterUserDto {
  email: string,
  password: string,
  passwordConfirmation: string;
}

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
