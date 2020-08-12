import { DateOfBirth, InvalidDateOfBirthError } from './date-of-birth';

const DATE = '30/01/1997';

describe('Value Object - DateOfBirth', () => {
  test('Deve instânciar um Cpf se passar valor correto', () => {
    expect(new DateOfBirth(DATE)).toBeTruthy();
  });

  test('Deve retornar a mesma data de aniversário quando chamado o get da classe', () => {
    expect(new DateOfBirth(DATE).value).toBe(DATE);
  });

  test('Deve lançar InvalidDateOfBirthError ao criar objeto com Data de aniversário inválida', () => {
    expect(() => new DateOfBirth('')).toThrow(InvalidDateOfBirthError);
    expect(() => new DateOfBirth('abcde')).toThrow(InvalidDateOfBirthError);
    expect(() => new DateOfBirth('14-01-1997')).toThrow(InvalidDateOfBirthError);
    expect(() => new DateOfBirth('14/01/97')).toThrow(InvalidDateOfBirthError);
    expect(() => new DateOfBirth('30/02/2020')).toThrow(InvalidDateOfBirthError);
    expect(() => new DateOfBirth('29/02/2019')).toThrow(InvalidDateOfBirthError);
    expect(() => new DateOfBirth('30/02/2020')).toThrow(InvalidDateOfBirthError);
    expect(() => new DateOfBirth('14/01/1899')).toThrow(InvalidDateOfBirthError);
    expect(() => new DateOfBirth('14/01/2100')).toThrow(InvalidDateOfBirthError);
  });
});
