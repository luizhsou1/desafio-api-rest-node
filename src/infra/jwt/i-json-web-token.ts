import { User } from '../../users/domain/entities/user';

export interface IJsonWebToken {
    generate(user: User): Promise<string>;
    validate(token: string): Promise<User>;
}

export interface PayloadJwt {
  sub: string,
}
