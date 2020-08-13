export const errorCredentialsSchema = {
  type: 'object',
  properties: {
    error: {
      type: 'string',
    },
    message: {
      type: 'string',
    },
    'expiredAt?': {
      type: 'string',
    },
  },
};
