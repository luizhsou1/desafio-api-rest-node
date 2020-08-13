import { Request, Response, NextFunction } from 'express';
import { nextTick } from 'process';
import { Controller } from '../../../shared/controller';
import { UseCase } from '../../../shared/use-case';
import { LoginDto, LoginDtoOutput } from '../../domain/use-cases/login';
import { ValidationError } from '../../../shared/errors';

export class LoginController implements Controller {
  constructor(
    private login: UseCase<LoginDto, LoginDtoOutput>,
  ) {}

  async handle(req: Request, res: Response, next: NextFunction): Promise<Response> {
    try {
      this._validation(req.body);
      const userDto = await this.login.execute(req.body);

      delete userDto.user.password;
      return res.status(200).json(userDto);
    } catch (error) {
      next(error);
    }
  }

  /**
   * Faz validações primitivas, se campo foi enviado com tipo correto
   */
  private _validation(data?: LoginDto): void | Error {
    if (!data.email || typeof data.email !== 'string') {
      throw new ValidationError("Informe um e-mail do tipo 'string'", 'email');
    }
    if (!data.password || typeof data.password !== 'string') {
      throw new ValidationError("Informe uma senha do tipo 'string'", 'password');
    }
  }
}
