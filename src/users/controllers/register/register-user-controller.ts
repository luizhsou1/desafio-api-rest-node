import { Request, Response, NextFunction } from 'express';
import { Controller } from '../../../shared/controller';
import { UseCase } from '../../../shared/use-case';
import { RegisterUserDto } from '../../domain/use-cases/register-user';
import { LoginDtoOutput } from '../../domain/use-cases/login';
import { ValidationError } from '../../../shared/errors';

export class RegisterUserController implements Controller {
  constructor(
    private registerUser: UseCase<RegisterUserDto, LoginDtoOutput>,
  ) {}

  async handle(req: Request, res: Response, next: NextFunction): Promise<Response> {
    try {
      this._validation(req.body);
      const userDto = await this.registerUser.execute({
        ...req.body,
        ip: req.ip === '::1' ? '127.0.0.1' : req.ip,
      });

      delete userDto.user.password;
      return res.status(201).json(userDto);
    } catch (error) {
      next(error);
    }
  }

  /**
   * Faz validações primitivas, se campo foi enviado com tipo correto
   */
  private _validation(data?: RegisterUserDto): void | Error {
    if (!data.email || typeof data.email !== 'string') {
      throw new ValidationError("Informe um e-mail do tipo 'string'", 'email');
    }
    if (!data.password || typeof data.password !== 'string') {
      throw new ValidationError("Informe uma senha do tipo 'string'", 'password');
    }
    if (!data.passwordConfirmation || typeof data.passwordConfirmation !== 'string') {
      throw new ValidationError("Informe uma confirmação de senha do tipo 'string'", 'passwordConfirmation');
    }
    if (data.password !== data.passwordConfirmation) {
      throw new ValidationError('Informe uma confirmação de senha igual a senha', 'passwordConfirmation');
    }
  }
}
