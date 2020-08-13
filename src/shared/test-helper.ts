import { DomainError, ValidationError } from './errors';

export const throwError = (): never => {
  throw new Error();
};

// Lança um erro qualquer de domínio (Regras de negócio)
export const throwDomainError = (): never => {
  throw new DomainError('', '');
};

// Lança um erro qualquer de validação
export const throwValidationError = (): never => {
  throw new ValidationError('', '');
};
