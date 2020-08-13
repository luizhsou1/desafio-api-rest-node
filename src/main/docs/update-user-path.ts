export const updateUserPath = {
  put: {
    security: [{
      apiKeyAuth: [],
    }],
    tags: ['API'],
    summary: 'Endpoint privado para atualizar dados do usuário (clique no cadeado ao lado para informar token)',
    description: 'Apenas o próprio usuário pode alterar seus dados, por isso não preciso que me passe na url algum parâmetro para identificá-lo, pego do próprio Jwt',
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
