import { updateUserPath } from './update-user-path';
import { schemas } from './schemas';
import { registerUserPath } from './register-user-path';
import { loginPath } from './login-path';
import { apiKeyAuthSchema } from './schemas/api-key-auth-schema';

export default {
  openapi: '3.0.0',
  info: {
    title: 'Desafio BTG Pactual',
    description: 'Desafio proposto pelo BTG Pactual para seguir para a próxima fase da entrevista',
    version: '1.0.0',
    contact: {
      name: 'Luiz Henrique',
      email: 'luizhsou1@gmail.com',
      url: 'https://www.linkedin.com/in/luizhsou1',
    },
    // license: {
    //   name: 'GPL-3.0-or-later',
    //   url: 'https://spdx.org/licenses/GPL-3.0-or-later.html',
    // },
  },
  externalDocs: {
    description: 'Link para repositório',
    url: 'https://github.com/luizhsou1/desafio-btg-pactual',
  },
  servers: [{
    url: '/', // '/api/v1',
    description: 'Servidor Principal',
  }],
  tags: [{
    name: 'API',
    description: 'Endpoints da API',
  }],
  paths: {
    '/register': {
      ...registerUserPath,
    },
    '/login': {
      ...loginPath,
    },
    '/users': {
      ...updateUserPath,
    },
  },
  schemas,
  components: {
    securitySchemes: {
      apiKeyAuth: apiKeyAuthSchema,
    },
  },
};
