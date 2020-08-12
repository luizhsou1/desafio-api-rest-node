import { Request, Response } from 'express';
import { Controller } from '@/shared/controller';
import { UserDto } from '@/users/domain/entities/user';
import { ValidationError, DomainError } from '@/shared/errors';
import { UseCase } from '@/shared/use-case';

export class UpdateUserController implements Controller {
  constructor(
    private updateUser: UseCase<UserDto, UserDto>,
  ) {}

  async handle(request: Request, response: Response): Promise<Response> {
    try {
      this._validation(request.body);
      const userDto = await this.updateUser.execute(request.body);

      return response.status(200).json(userDto);
    } catch (error) {
      if (error instanceof DomainError || error instanceof ValidationError) {
        return response.status(400).json(error);
      }
      return response.status(500).json({ error: 'InternalServerError' });
    }
  }

  /**
   * Faz validações primitivas, se campo foi enviado com tipo correto
   */
  private _validation(data?: UserDto): void | Error {
    if (!data.email || typeof data.email !== 'string') {
      throw new ValidationError("Informe um e-mail do tipo 'string'", 'email');
    }
    if (!data.password || typeof data.password !== 'string') {
      throw new ValidationError("Informe uma senha do tipo 'string'", 'password');
    }
    if (!data.fullName || typeof data.fullName !== 'string') {
      throw new ValidationError("Informe um nome do tipo 'string'", 'fullName');
    }
    if (!data.dateOfBirth || typeof data.dateOfBirth !== 'string') {
      throw new ValidationError("Informe uma data de aniversário do tipo 'string'", 'dateOfBirth');
    }
    if (!data.cpf || typeof data.cpf !== 'string') {
      throw new ValidationError("Informe um cpf do tipo 'string'", 'cpf');
    }
    if (!data.rg || typeof data.rg !== 'string') {
      throw new ValidationError("Informe um rg do tipo 'string'", 'rg');
    }
  }
}
