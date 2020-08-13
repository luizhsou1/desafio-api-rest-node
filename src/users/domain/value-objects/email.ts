import * as EmailValidator from 'email-validator';
import { DomainError } from '../../../shared/errors';

export class InvalidEmailError extends DomainError {
  constructor() {
    super('InvalidEmailError', 'Informe um e-mail válido');
  }
}

export class Email {
  private _value: string
  constructor(value: string) {
    if (!EmailValidator.validate(value)) {
      throw new InvalidEmailError();
    }
    this._value = value;
  }

  get value(): string {
    return this._value;
  }
}
