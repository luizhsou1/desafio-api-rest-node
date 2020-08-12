import { Request, Response } from 'express';
import { Controller } from '@/shared/controller';
import { ValidationError, DomainError } from '@/shared/errors';
import { UseCase } from '@/shared/use-case';
import { LoginDto, LoginDtoOutput } from '@/users/domain/use-cases/login';

export class LoginController implements Controller {
  constructor(
    private login: UseCase<LoginDto, LoginDtoOutput>,
  ) {}

  async handle(req: Request, res: Response): Promise<Response> {
    try {
      this._validation(req.body);
      const userDto = await this.login.execute(req.body);

      return res.status(200).json(userDto);
    } catch (error) {
      if (error instanceof DomainError || error instanceof ValidationError) {
        return res.status(400).json(error);
      }
      return res.status(500).json({ error: 'InternalServerError' });
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
