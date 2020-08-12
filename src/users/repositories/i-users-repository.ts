import { User } from '@/users/entities/user';

export interface IUsersRepository {
  /**
   * Salva o usuário em um arquivo .json
   */
  save(user: User): Promise<void>;

  /**
   * Salva o usuário em um arquivo .txt, no layout pedido no desafio
   */
  saveTxt(user: User): Promise<void>;

  /**
   * Busca usuário pelo e-mail
   */
  findByEmail(email: string): Promise<User>;
}
