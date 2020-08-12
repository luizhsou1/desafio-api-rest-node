import { User, UserDto } from '../../../users/domain/entities/user';
import { UsersRepositoryFile } from './users-repository-file';

export const makeUserDtoFake = (): UserDto => ({
  email: 'luiz@mail.com',
  password: '123456',
  fullName: 'Luiz Henrique de Souza',
  dateOfBirth: '14/01/1997',
  cpf: '39536580004',
  rg: '12345678',
  ip: '127.0.0.1',
});

describe('Repository - UsersRepositoryFile', () => {
  test('Deve salvar novo usuário', async () => {
    const sut = new UsersRepositoryFile();

    const fakeUserDto = makeUserDtoFake();
    const u = await User.create(fakeUserDto);
    await sut.save(u);

    const user = await sut.findByEmail(fakeUserDto.email);
    expect(user).toBeTruthy();
  });

  test('Deve atualizar informação de usuário existente', async () => {
    const sut = new UsersRepositoryFile('./files/users-test.json');

    const fakeUserDto = makeUserDtoFake();
    fakeUserDto.fullName = 'John';
    const u = await User.create(fakeUserDto);
    await sut.save(u);

    const us = await sut.findByEmail(fakeUserDto.email);
    expect(us.toDto().fullName).toBe('John');
  });

  test('Deve atualizar informação de usuário existente', async () => {
    const sut = new UsersRepositoryFile('./files/users-test.json');

    const fakeUserDto = makeUserDtoFake();
    fakeUserDto.fullName = 'John';
    const u = await User.create(fakeUserDto);
    await sut.saveTxt(u);
  });
});
