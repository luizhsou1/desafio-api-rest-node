import { commonPropsUser } from './update-user-schema';

export const propsUpdateUser = {
  ...commonPropsUser,
  ip: {
    type: 'string',
  },
};

export const updateUserReturnSchema = {
  type: 'object',
  properties: propsUpdateUser,
  required: ['fullName', 'dateOfBirth', 'cpf', 'rg'],
};
