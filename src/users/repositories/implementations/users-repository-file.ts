// Implementação voltada para manipulação de arquivos
// Escolhi trabalhar com JSON, única e exclusivamente por ser mais fácil de manipular no javascript
// Mas tem o método saveTxt que persiti o usuário como txt no formato proposto no desafio, para poder ser baixado posteriormente

import { IUsersRepository } from '../i-users-repository';
import { User, UserDto } from '../../domain/entities/user';
import { jsonReader, jsonWriter, textWriter } from '../../../shared/files-helper';

export class UsersRepositoryFile implements IUsersRepository {
  private filename: string;
  constructor(filename?: string) {
    this.filename = filename || './files/users.json';
  }

  async save(user: User): Promise<void> {
    let users = jsonReader(this.filename) as Array<UserDto>;
    const userFound = await this.findByEmail(user.email.value);

    if (userFound) {
      users = users.map((u) => {
        if (u.email === user.email.value) {
          // Únicos dados que podem ser alterados
          const { fullName, cpf, dateOfBirth, rg, ip } = user.toDto();
          u.fullName = fullName;
          u.cpf = cpf;
          u.dateOfBirth = dateOfBirth;
          u.rg = rg;
          u.ip = ip;
        }
        return u;
      });
    } else {
      users.push(user.toDto());
    }

    jsonWriter(this.filename, users);
  }

  saveTxt(user: User): Promise<void> {
    const { email, cpf, dateOfBirth, fullName, rg, ip } = user.toDto();
    const content = `Ex:
Nome Completo: ${fullName}
Data de Nascimento: ${dateOfBirth}
CPF: ${cpf}
RG: ${rg}

Usuario Autenticado
Login: ${email}
IP: ${ip} (IP do último acesso)
`;
    textWriter(`./files/texts/${email}.txt`, content);
    return Promise.resolve();
  }

  async findByEmail(email: string): Promise<User> {
    const users = jsonReader(this.filename) as Array<UserDto>;
    const userDtoFound = users.length > 0 ? users.find((u) => u.email === email) : undefined;
    if (userDtoFound) {
      return await User.create(userDtoFound);
    }
  }
}
