import { errorSchema } from './error-schema';
import { errorCredentialsSchema } from './error-credentials-schema';
import { registerUserSchema } from './register-user-schema';
import { loginSchema } from './login-schema';
import { loginReturnSchema } from './login-return-schema';
import { updateUserSchema } from './update-user-schema';
import { updateUserReturnSchema } from './update-user-return-schema';

export const schemas = {
  // errors
  errorSchema,
  errorCredentialsSchema,

  // Inputs
  registerUserSchema,
  loginSchema,
  updateUserSchema,

  // Outputs
  updateUserReturnSchema,
  loginReturnSchema,
};
