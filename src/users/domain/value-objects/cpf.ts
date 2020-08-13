import { cpf } from 'cpf-cnpj-validator';
import { DomainError } from '../../../shared/errors';

export class InvalidCpfError extends DomainError {
  constructor() {
    super('InvalidCpfError', 'Informe um cpf válido');
  }
}

export class Cpf {
  private _value: string
  constructor(value: string) {
    if (!cpf.isValid(value)) {
      throw new InvalidCpfError();
    }
    this._value = value;
  }

  get value(): string {
    return cpf.format(this._value);
  }
}
