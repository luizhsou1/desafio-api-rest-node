import { Email, Cpf, DateOfBirth, Password } from '../value-objects';

export interface UserDto {
    email: string,
    password?: string,
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
  constructor(props: UserDto) {
    this._email = new Email(props.email);
    this._password = props.password ? new Password(props.password) : undefined;
    this._fullName = props.fullName ? props.fullName : undefined;
    this._dateOfBirth = props.dateOfBirth ? new DateOfBirth(props.dateOfBirth) : undefined;
    this._cpf = props.cpf ? new Cpf(props.cpf) : undefined;
    this._rg = props.rg ? props.rg : undefined;
    this._ip = props.ip;
  }

  /**
   * Retorna apenas valores puros do javascript
   */
  async toDto(): Promise<UserDto> {
    return {
      email: this.email.value,
      password: this.password ? await this.password.toHash() : undefined,
      fullName: this._fullName,
      dateOfBirth: this._dateOfBirth ? this._dateOfBirth.value : undefined,
      cpf: this._cpf ? this._cpf.value : undefined,
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
