export const loginReturnSchema = {
  type: 'object',
  properties: {
    user: {
      $ref: '#/schemas/updateUserReturnSchema',
    },
    acessToken: {
      type: 'string',
    },
  },
  required: ['email', 'password'],
};
