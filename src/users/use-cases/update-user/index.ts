import { UsersRepositoryFile } from '@/users/repositories/implementations/users-repository-file';
import { UpdateUser } from './update-user';
import { UpdateUserController } from './update-user-controller';

const usersRepoFile = new UsersRepositoryFile();

const updateUser = new UpdateUser(usersRepoFile, '127.0.0.1'); // TODO Refazer antes de entregar

const updateUserController = new UpdateUserController(updateUser);

export { updateUserController };
