import express from 'express';
import { serve, setup } from 'swagger-ui-express';
import { router } from './routes';
import { DomainError, ValidationError } from '../shared/errors';
import swaggerConfig from './docs';
import { noCache } from './middlewares/no-cache';

const app = express();

app.use(express.json());

app.use('/docs', noCache, serve, setup(swaggerConfig));

app.use(router);

// Manipula erros da aplicação
app.use((error, req, res, next) => {
  if (error instanceof DomainError) {
    return res.status(400).json({
      error: error.name,
      message: error.message,
    });
  }
  if (error instanceof ValidationError) {
    return res.status(400).json({
      error: error.name,
      param: error.param,
      message: error.message,
    });
  }
  return res.status(500).json({ error: 'InternalServerError', stack: error });
});

export { app };
