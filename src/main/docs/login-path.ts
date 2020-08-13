export const loginPath = {
  post: {
    tags: ['API'],
    summary: 'Endpoint público logar usuário',
    description: 'Devolve um accessToken válido',
    parameters: [],
    requestBody: {
      required: true,
      content: {
        'application/json': {
          schema: {
            $ref: '#/schemas/loginSchema',
          },
        },
      },
    },
    responses: {
      200: {
        description: 'Sucess',
        content: {
          'application/json': {
            schema: {
              $ref: '#/schemas/loginReturnSchema',
            },
          },
        },
      },
      400: {
        description: 'Bad Request',
        content: {
          'application/json': {
            schema: {
              $ref: '#/schemas/errorSchema',
            },
          },
        },
      },
      401: {
        description: 'Unauthorized',
        content: {
          'application/json': {
            schema: {
              $ref: '#/schemas/errorCredentialsSchema',
            },
          },
        },
      },
    },
  },
};
