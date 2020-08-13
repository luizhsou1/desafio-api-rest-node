import { NotFoundError } from '../../../shared/errors';
import { UseCase } from '../../../shared/use-case';
import { UserDto, User } from '../entities/user';
import { IUsersRepository } from '../../repositories/i-users-repository';

export interface UpdateUserDto {
  email: string,
  fullName?: string,
  dateOfBirth?: string,
  cpf?: string,
  rg?: string,
  ip: string,
}

/**
 * Atualiza dados do usuário
 */
export class UpdateUser implements UseCase<UpdateUserDto, UserDto> {
  constructor(
    private readonly usersRepo: IUsersRepository,
  ) {}

  async execute(data?: UpdateUserDto): Promise<UserDto> {
    let user = await this.usersRepo.findByEmail(data.email);
    if (!user) {
      throw new NotFoundError('UserNotFoundError', 'Usuário não encontrado');
    }

    user = new User(data);
    await this.usersRepo.save(user);
    await this.usersRepo.saveTxt(user);

    return user.toDto();
  }
}
