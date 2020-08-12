import { Request, Response } from 'express';
import { Controller } from '@/shared/controller';
import { ValidationError, DomainError } from '@/shared/errors';
import { RegisterUser } from './register-user';
import { RegisterUserDto } from './register-user-dto';

export class RegisterUserController implements Controller {
  constructor(
    private registerUser: RegisterUser,
  ) {}

  async handle(request: Request, response: Response): Promise<Response> {
    try {
      this._validation(request.body);
      const userDto = await this.registerUser.execute(request.body);

      return response.status(201).json(userDto);
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
