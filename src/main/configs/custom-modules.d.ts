declare module Express {
  interface Request {
    email: string, // Na autenticação passo para a request
  }
}
