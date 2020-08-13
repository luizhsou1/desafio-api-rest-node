import { LoginDtoOutput } from './login';
import { UseCase } from '../../../shared/use-case';
import { IUsersRepository } from '../../repositories/i-users-repository';
import { IJsonWebToken } from '../../../infra/jwt/i-json-web-token';
import { UserInUseError } from '../../../shared/errors';
import { User, UserDto } from '../entities/user';

export interface RegisterUserDto {
  email: string,
  password: string,
  passwordConfirmation: string;
  ip: string;
}

/**
 * Registra usuário com informações básicas, para que posteriormente ele possa atualizar suas informações
 */
export class RegisterUser implements UseCase<RegisterUserDto, LoginDtoOutput> {
  constructor(
    private readonly usersRepo: IUsersRepository,
    private readonly jwt: IJsonWebToken,
  ) {}

  async execute(data?: RegisterUserDto): Promise<LoginDtoOutput> {
    let user = await this.usersRepo.findByEmail(data.email);
    if (user) {
      throw new UserInUseError();
    }

    user = new User({
      email: data.email,
      password: data.password,
      ip: data.ip,
    });
    await this.usersRepo.save(user);

    const acessToken = await this.jwt.generate(user);

    return { user: await user.toDto(), acessToken };
  }
}
