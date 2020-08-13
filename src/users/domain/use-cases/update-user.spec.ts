import { makeUsersRepoMock } from '../../../shared/test-helper';
import { UpdateUser, UpdateUserDto } from './update-user';
import { makeUserDtoFake } from '../entities/user.spec';

const makeSut = () => {
  const usersRepo = makeUsersRepoMock();
  const sut = new UpdateUser(usersRepo);
  return {
    usersRepo,
    sut,
  };
};

describe('UseCase - UpdateUser', () => {
  test('Deve lançar exceção se método save do UsersRepository lançar exceção', async () => {
    const { sut, usersRepo } = makeSut();
    jest
      .spyOn(usersRepo, 'save')
      .mockReturnValueOnce(new Promise((resolve, reject) => reject(new Error())));
    const promise = sut.execute(makeUserDtoFake());
    await expect(promise).rejects.toThrow();
  });

  test('Deve lançar exceção se método saveTxt do UsersRepository lançar exceção', async () => {
    const { sut, usersRepo } = makeSut();
    jest
      .spyOn(usersRepo, 'saveTxt')
      .mockReturnValueOnce(new Promise((resolve, reject) => reject(new Error())));
    const promise = sut.execute(makeUserDtoFake());
    await expect(promise).rejects.toThrow();
  });
});
