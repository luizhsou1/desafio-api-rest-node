import { IJsonWebToken } from 'infra/jwt/i-json-web-token';
import { makeUsersRepoMock } from '../../../shared/test-helper';
import { makeUserDtoFake } from '../entities/user.spec';
import { RegisterUser, RegisterUserDto } from './register-user';
import { User } from '../entities/user';

class JsonWebTokenMock implements IJsonWebToken {
  generate(user: User): Promise<string> {
    return Promise.resolve('any_string');
  }

  validate(token: string): Promise<User> {
    return Promise.resolve(new User(makeUserDtoFake()));
  }
}

const makeSut = () => {
  const usersRepo = makeUsersRepoMock();
  const jsonWebToken = new JsonWebTokenMock();
  const sut = new RegisterUser(usersRepo, jsonWebToken);
  return {
    usersRepo,
    jsonWebToken,
    sut,
  };
};

const makeRegisterUserDtoFake = (): RegisterUserDto => ({
  email: 'luizhsou1@gmail.com',
  password: '123456',
  passwordConfirmation: '123456',
  ip: '127.0.0.1',
});

describe('UseCase - UpdateUser', () => {
  test('Deve lançar exceção se método findByEmail do UsersRepository lançar exceção', async () => {
    const { sut, usersRepo } = makeSut();
    jest
      .spyOn(usersRepo, 'findByEmail')
      .mockReturnValueOnce(new Promise((resolve, reject) => reject(new Error())));
    const promise = sut.execute(makeRegisterUserDtoFake());
    await expect(promise).rejects.toThrow();
  });

  // TODO Voltar e aumentar cobertura de testes caso de tempo
});
