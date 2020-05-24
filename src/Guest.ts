import { IUser } from "./User";

export class Guest implements IUser {
  name: string;
  email: string;

  constructor(name: string, email: string) {
    this.name = name;
    this.email = email;
  }
}
