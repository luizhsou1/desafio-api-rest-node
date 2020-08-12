import { Email, InvalidEmailError } from './email';

const EMAIL = 'luizhsou1@gmail.com';

describe('Value Object - Email', () => {
  test('Deve instânciar um Email passar email correto', () => {
    expect(new Email(EMAIL)).toBeTruthy();
  });

  test('Deve retornar o mesmo email quando chamado o get da classe', () => {
    expect(new Email(EMAIL).value).toBe(EMAIL);
  });

  test('Deve lançar InvalidEmailError ao criar objeto com email inválido', () => {
    expect(() => new Email('')).toThrow(InvalidEmailError);
    expect(() => new Email('luiz')).toThrow(InvalidEmailError);
    expect(() => new Email('luizmail.com')).toThrow(InvalidEmailError);
  });
});
