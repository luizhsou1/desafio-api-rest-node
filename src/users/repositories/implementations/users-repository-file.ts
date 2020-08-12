// Implementação voltada para manipulação de arquivos
// Escolhi trabalhar com JSON, única e exclusivamente por ser mais fácil de manipular no javascript
// Mas tem o método saveTxt que persiti o usuário como txt no formato proposto no desafio, para poder ser baixado posteriormente

import { User } from '@/users/domain/entities/user';
import { NotFoundError } from '@/shared/errors';
import { IUsersRepository } from '../i-users-repository';

export class UsersRepositoryFile implements IUsersRepository {
  save(user: User): Promise<void> {
    throw new Error('Method not implemented.');
  }

  saveTxt(user: User): Promise<void> {
    throw new Error('Method not implemented.');
  }

  findByEmail(email: string): Promise<User> {
    throw new Error('Method not implemented.');
  }
}
