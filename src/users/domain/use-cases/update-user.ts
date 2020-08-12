import { UseCase } from '../../../shared/use-case';
import { UserDto, User } from '../entities/user';
import { IUsersRepository } from '../../repositories/i-users-repository';

/**
 * Atualiza dados do usuário
 */
export class UpdateUser implements UseCase<UserDto, UserDto> {
  constructor(
    private readonly usersRepo: IUsersRepository,
    private readonly ip: string,
  ) {}

  async execute(data?: UserDto): Promise<UserDto> {
    data.ip = this.ip;
    const user = await User.create(data);
    await this.usersRepo.save(user);

    return data;
  }
}
