
export class UsersService {

  users = [
    { id: 1, name: 'Steven', age: 40 },
    { id: 2, name: 'Viktor', age: 35 },
    { id: 3, name: 'Karina', age: 10 },
    { id: 4, name: 'Vanessa', age: 6 }

  ];
  constructor() { }

  getAllUsers() {
    return this.users;

    /*   new Promise(res => {
        setTimeout(() => {
          res(this.users);
        }, 0);
      }); */

  }
  addUser(user: { id: number, name: string, age: number }) {
    this.users.push(user);
  }

  getUserById(id: number) {

    return this.users.find(x => x.id === id);
  }
}
