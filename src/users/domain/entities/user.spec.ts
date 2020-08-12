import { Password } from '@/users/domain/value-objects';
import { User, UserDto } from './user';

export const makeUserDtoFake = (): UserDto => ({
  email: 'luiz@mail.com',
  password: '123456',
  fullName: 'Luiz Henrique de Souza',
  dateOfBirth: '14/01/1997',
  cpf: '39536580004',
  rg: '12345678',
  ip: '127.0.0.1',
});

const makeSut = async (): Promise<User> => await User.create(makeUserDtoFake());

describe('Entity - User', () => {
  test('Deve instanciar um Usuario quando passar valores corretos no construtor', async () => {
    const sut = await makeSut();
    expect(sut).toBeTruthy();
  });

  test('Deve instanciar Usuario quando deixar de passar algum valor que não é obrigatório', async () => {
    let user = await User.create({
      email: 'luiz@mail.com',
      password: '123456',
      dateOfBirth: '14/01/1997',
      cpf: '39536580004',
      rg: '12345678',
      ip: '127.0.0.1',
    });
    expect(user).toBeTruthy();
    user = await User.create({
      email: 'luiz@mail.com',
      password: '123456',
      fullName: 'Luiz Henrique de Souza',
      cpf: '39536580004',
      rg: '12345678',
      ip: '127.0.0.1',
    });
    expect(user).toBeTruthy();
    user = await User.create({
      email: 'luiz@mail.com',
      password: '123456',
      fullName: 'Luiz Henrique de Souza',
      dateOfBirth: '14/01/1997',
      rg: '12345678',
      ip: '127.0.0.1',
    });
    expect(user).toBeTruthy();
    user = await User.create({
      email: 'luiz@mail.com',
      password: '123456',
      fullName: 'Luiz Henrique de Souza',
      dateOfBirth: '14/01/1997',
      cpf: '39536580004',
      ip: '127.0.0.1',
    });
    expect(user).toBeTruthy();
  });

  test('Deve retornar uma instância de Password no get de password', async () => {
    const sut = await makeSut();
    expect(sut.password).toBeInstanceOf(Password);
  });

  // test('Deve retornar DTO correto no método toDto da classe', async () => {
  //   const sut = await makeSut();
  //   expect(sut.toDto()).toBe(makeUserDtoFake());
  // });
});
