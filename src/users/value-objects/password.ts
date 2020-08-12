import bcrypt from 'bcrypt';
import { DomainError } from '@/shared/errors';

export class InvalidPasswordError extends DomainError {
  constructor(message: string) {
    // eslint-disable-next-line no-use-before-define
    super('InvalidPasswordError', message);
  }
}

export class Password {
  static minLength = 6;
  static hashCost = 12;

  private _value: string
  private constructor() {}

  static async create(value: string): Promise<Password> {
    const password = new Password();

    if (!password._validatePassword(value)) {
      throw new InvalidPasswordError(`Informe uma senha com pelo menos ${Password.minLength} caracteres`);
    }

    password._value = await password._toHash(value);

    return password;
  }

  get value(): string {
    return this._value;
  }

  // Pode evoluir esse método, para montar uma lógiva bem melhor para validar segurança da senha
  private _validatePassword(password: string): boolean {
    return password.length >= Password.minLength;
  }

  private async _toHash(password: string): Promise<string> {
    return await bcrypt.hash(password, Password.hashCost);
  }

  async isEqual(comparablePassword: string) {
    return bcrypt.compare(comparablePassword, this._value);
  }
}
