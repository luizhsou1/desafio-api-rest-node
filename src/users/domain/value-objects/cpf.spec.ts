import { Cpf, InvalidCpfError } from './cpf';

const CPF = '39536580004';
const FORMATTED_CPF = '395.365.800-04';

describe('Value Object - Cpf', () => {
  test('Deve instânciar um Cpf se passar valor correto', () => {
    expect(new Cpf(CPF)).toBeTruthy();
  });

  test('Deve retornar o cpf formatado quando chamado o get da classe', () => {
    expect(new Cpf(CPF).value).toBe(FORMATTED_CPF);
  });

  test('Deve lançar InvalidCpfError ao criar objeto com cpf inválido', () => {
    expect(() => new Cpf('')).toThrow(InvalidCpfError);
    expect(() => new Cpf('12345678912')).toThrow(InvalidCpfError);
    expect(() => new Cpf('00000000000')).toThrow(InvalidCpfError);
  });
});
