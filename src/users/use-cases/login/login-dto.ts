import { UserDto } from '@/users/entities/user';

export interface LoginDto {
  email: string,
  password: string,
}

export interface LoginDtoOutput {
  user: UserDto,
  acessToken: string,
}
