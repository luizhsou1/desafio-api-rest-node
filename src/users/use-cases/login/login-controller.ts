import { Request, Response } from 'express';
import { Controller } from '@/shared/controller';
import { ValidationError, DomainError } from '@/shared/errors';
import { Login } from './login';
import { LoginDto } from './login-dto';

export class LoginController implements Controller {
  constructor(
    private login: Login,
  ) {}

  async handle(request: Request, response: Response): Promise<Response> {
    try {
      this._validation(request.body);
      const userDto = await this.login.execute(request.body);

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
  private _validation(data?: LoginDto): void | Error {
    if (!data.email || typeof data.email !== 'string') {
      throw new ValidationError("Informe um e-mail do tipo 'string'", 'email');
    }
    if (!data.password || typeof data.password !== 'string') {
      throw new ValidationError("Informe uma senha do tipo 'string'", 'password');
    }
  }
}
