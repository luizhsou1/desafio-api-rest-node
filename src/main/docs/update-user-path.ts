export const updateUserPath = {
  put: {
    security: [{
      apiKeyAuth: [],
    }],
    tags: ['API'],
    summary: 'Endpoint privado para atualizar dados do usuário (clique no cadeado ao lado para informar token)',
    description: 'Essa rota é privada e só pode ser executada por **usuários autenticados**',
    parameters: [],
    requestBody: {
      required: true,
      content: {
        'application/json': {
          schema: {
            $ref: '#/schemas/updateUserSchema',
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
              $ref: '#/schemas/updateUserReturnSchema',
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
