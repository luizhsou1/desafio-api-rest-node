export const errorSchema = {
  type: 'object',
  properties: {
    error: {
      type: 'string',
    },
    message: {
      type: 'string',
    },
    'param?': {
      type: 'string',
    },
  },
};
