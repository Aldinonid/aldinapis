import { Injectable } from '@nestjs/common';
import { User } from './users.model';

@Injectable()
export class UsersService {
  getUser() {
    return new User(
      'johndoe',
      'https://i.kym-cdn.com/photos/images/newsfeed/001/878/329/dfa.jpg',
      'John Doe',
      171510052,
      "Kuli Bangunan",
      3,
      3.5,
      ["Data Science", "Database Analysis", "Web Development"],
      ["Gaming", "Coding", "Music"]
    )
  }
}
