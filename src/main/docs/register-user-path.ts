export const registerUserPath = {
  post: {
    tags: ['API'],
    summary: 'Endpoint público para usuário se registrar',
    description: 'Cadastra usuário com informações mínimas e devolve um accessToken válido para ele possa atualizar seus dados posteriormente',
    parameters: [],
    requestBody: {
      required: true,
      content: {
        'application/json': {
          schema: {
            $ref: '#/schemas/registerUserSchema',
          },
        },
      },
    },
    responses: {
      201: {
        description: 'Created',
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
