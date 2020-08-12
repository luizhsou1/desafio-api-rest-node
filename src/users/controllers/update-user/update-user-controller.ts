import { Request, Response, NextFunction } from 'express';
import { Controller } from '../../../shared/controller';
import { UseCase } from '../../../shared/use-case';
import { UserDto } from '../../domain/entities/user';
import { DomainError, ValidationError } from '../../../shared/errors';

export class UpdateUserController implements Controller {
  constructor(
    private updateUser: UseCase<UserDto, UserDto>,
  ) {}

  async handle(req: Request, res: Response, next: NextFunction): Promise<Response> {
    try {
      this._validation(req.body);
      const userDto = await this.updateUser.execute(req.body);

      return res.status(200).json(userDto);
    } catch (error) {
      next(error);
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
