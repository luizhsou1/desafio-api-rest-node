import { UpdateUserController } from './update-user-controller';
import { UsersRepositoryFile } from '../../repositories/implementations/users-repository-file';
import { UpdateUser } from '../../domain/use-cases/update-user';

const usersRepoFile = new UsersRepositoryFile();

const updateUser = new UpdateUser(usersRepoFile);

const updateUserController = new UpdateUserController(updateUser);

export { updateUserController };
