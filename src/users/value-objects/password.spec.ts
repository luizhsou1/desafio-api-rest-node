import { Password, InvalidPasswordError } from './password';

const PASSWORD = '123456';

describe('Value Object - DateOfBirth', () => {
  test('Deve instânciar um Cpf se passar valor correto', async () => {
    expect(await Password.create(PASSWORD)).toBeTruthy();
  });

  test('Deve retornar a hash da senha quando chamado o get da classe', async () => {
    const password = await Password.create(PASSWORD);
    expect(password.value).not.toBe(PASSWORD);
  });

  test('Deve lançar InvalidPasswordError ao criar objeto com Data de aniversário inválida', async () => {
    let promise = Password.create('');
    await expect(promise).rejects.toThrow(InvalidPasswordError);
    promise = Password.create('abcde');
    await expect(promise).rejects.toThrow(InvalidPasswordError);
    promise = Password.create('12345');
    await expect(promise).rejects.toThrow(InvalidPasswordError);
  });
});
