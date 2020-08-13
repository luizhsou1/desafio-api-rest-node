import { User } from '../users/domain/entities/user';
import { makeUserDtoFake } from '../users/domain/entities/user.spec';
import { IUsersRepository } from '../users/repositories/i-users-repository';
import { DomainError, ValidationError } from './errors';

export const throwError = (): never => {
  throw new Error();
};

// Lança um erro qualquer de domínio (Regras de negócio)
export const throwDomainError = (): never => {
  throw new DomainError('', '');
};

// Lança um erro qualquer de validação
export const throwValidationError = (): never => {
  throw new ValidationError('', '');
};

class UsersRepoMock implements IUsersRepository {
  save(user: User): Promise<void> {
    return Promise.resolve();
  }

  saveTxt(user: User): Promise<void> {
    return Promise.resolve();
  }

  findByEmail(email: string): Promise<User> {
    return Promise.resolve(new User(makeUserDtoFake()));
  }
}

export const makeUsersRepoMock = (): IUsersRepository => new UsersRepoMock();
