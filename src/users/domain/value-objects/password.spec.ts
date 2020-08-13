import { Password, InvalidPasswordError } from './password';

const PASSWORD = '123456';

describe('Value Object - Password', () => {
  test('Deve instânciar um Cpf se passar valor correto', () => {
    expect(new Password(PASSWORD)).toBeTruthy();
  });

  test('Deve retornar a hash da senha quando chamado o get da classe', () => {
    const password = new Password(PASSWORD);
    expect(password.toHash()).not.toBe(PASSWORD);
  });

  test('Deve lançar InvalidPasswordError ao criar objeto com senha inválida', () => {
    expect(() => new Password('')).toThrow(InvalidPasswordError);
    expect(() => new Password('abcde')).toThrow(InvalidPasswordError);
    expect(() => new Password('12345')).toThrow(InvalidPasswordError);
  });
});
