import { Request, Response, NextFunction } from 'express';
import { UpdateUserDto } from 'users/domain/use-cases/update-user';
import { Controller } from '../../../shared/controller';
import { UseCase } from '../../../shared/use-case';
import { UserDto } from '../../domain/entities/user';
import { ValidationError } from '../../../shared/errors';

export class UpdateUserController implements Controller {
  constructor(
    private updateUser: UseCase<UpdateUserDto, UserDto>,
  ) {}

  async handle(req: Request, res: Response, next: NextFunction): Promise<Response> {
    try {
      this._validation(req.body);

      const userDto = await this.updateUser.execute({
        email: req.email,
        ...req.body,
        ip: req.ip === '::1' ? '127.0.0.1' : req.ip,
      });

      delete userDto.password;
      return res.status(200).json(userDto);
    } catch (error) {
      next(error);
    }
  }

  /**
   * Faz validações primitivas, se campo foi enviado com tipo correto
   */
  private _validation(data?: UserDto): void | Error {
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
