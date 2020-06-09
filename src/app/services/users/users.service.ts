export class UsersService {

  users = [
    { id: 1, name: 'Steven' },
    { id: 2, name: 'Viktor' },
    { id: 3, name: 'Cuki' },

  ];

  constructor() { }

  getAll() {
    return this.users;
  }

  addUser(user: { id: number, name: string }) {
    this.users.push(user);
  }
}
