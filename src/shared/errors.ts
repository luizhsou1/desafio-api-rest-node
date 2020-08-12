// Erro genérico da camanda de domínio
// Servirá por exemplo em um controlador da web, que caso seja instância desse erro ele deve retornar (400 - Bad Request para o client)
export class DomainError extends Error {
  constructor(name: string, message: string) {
    super(message);
    this.name = name;
  }
}
