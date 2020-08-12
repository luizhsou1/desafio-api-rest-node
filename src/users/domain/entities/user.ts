import { Email, Cpf, DateOfBirth, Password } from '../value-objects';

export interface UserDto {
    email: string,
    password: string,
    fullName?: string,
    dateOfBirth?: string,
    cpf?: string,
    rg?: string,
    ip: string,
}

export class User {
  private _email: Email; // Será usado como identificador único da entidade
  private _password: Password;
  private _fullName?: string;
  private _dateOfBirth?: DateOfBirth;
  private _cpf?: Cpf;
  private _rg?: string;
  private _ip: string;

  /**
   * @throws DomainError
   */
  constructor() {}

  /**
   * Função construtora
   */
  static async create(props: UserDto) {
    const user = new User();
    user._email = new Email(props.email);
    user._password = await Password.create(props.password);
    user._fullName = props.fullName ? props.fullName : undefined;
    user._dateOfBirth = props.dateOfBirth ? new DateOfBirth(props.dateOfBirth) : undefined;
    user._cpf = props.cpf ? new Cpf(props.cpf) : undefined;
    user._rg = props.rg ? props.rg : undefined;
    user._ip = props.ip;

    return user;
  }

  /**
   * Retorna apenas valores puros do javascript
   */
  toDto(): UserDto {
    return {
      email: this.email.value,
      password: this.password.value,
      fullName: this._fullName,
      dateOfBirth: this._dateOfBirth.value,
      cpf: this._cpf.value,
      rg: this._rg,
      ip: this._ip,
    };
  }

  get email(): Email {
    return this._email;
  }

  get password(): Password {
    return this._password;
  }
}
