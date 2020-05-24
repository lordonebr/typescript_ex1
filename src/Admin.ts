import { IUser, User } from "./User";

export class Admin implements IUser {
  name: string;
  email: string;

  constructor(name: string, email: string) {
    this.name = name;
    this.email = email;
  }

  invite(user: User) {}
  remove(user: User) {}
}
