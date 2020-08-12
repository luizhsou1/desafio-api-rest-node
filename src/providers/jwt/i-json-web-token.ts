import { User } from '@/users/entities/user';

export interface IJsonWebToken {
    generate(user: User): Promise<string>;
    validate(token: string): Promise<User>;
}

export interface PayloadJwt {
  sub: string,
}
