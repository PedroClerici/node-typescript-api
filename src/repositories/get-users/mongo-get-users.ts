import { IGetUsersRepository } from "../../controllers/get-users/protocols";
import { User } from "../../models/user";

export class MongoGetUsersRepository implements IGetUsersRepository {
  async getUsers(): Promise<User[]> {
    return [
      {
        firstName: "Pedro",
        lastName: "Clerici",
        email: "pedro.clerici@example.com",
        password: "123",
      },
    ];
  }
}
