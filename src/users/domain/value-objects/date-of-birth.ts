import moment from 'moment';
import { DomainError } from '../../../shared/errors';

export class InvalidDateOfBirthError extends DomainError {
  constructor() {
    super('InvalidDateOfBirthError', 'Informe uma data de nascimento válida no formato dd/mm/aaaa');
  }
}

export class DateOfBirth {
  private _value: string
  constructor(value: string) {
    if (!this._validateDateOfBirth(value)) {
      throw new InvalidDateOfBirthError();
    }

    this._value = value;
  }

  get value(): string {
    return this._value;
  }

  private _validateDateOfBirth(date: string): boolean {
    const dt = moment(date, 'DD/MM/YYYY', true);
    const year = dt.get('year');
    return dt.isValid()
      && year > 1900
      && dt.toDate() <= new Date();
  }
}
