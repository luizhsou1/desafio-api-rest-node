export const commonPropsUser = {
  fullName: {
    type: 'string',
  },
  dateOfBirth: {
    type: 'string',
  },
  cpf: {
    type: 'string',
  },
  rg: {
    type: 'string',
  },
};

export const updateUserSchema = {
  type: 'object',
  properties: commonPropsUser,
  required: ['fullName', 'dateOfBirth', 'cpf', 'rg'],
};
