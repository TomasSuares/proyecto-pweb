import { User } from '../models/userModel';

export class UserService {
  private users: User[] = [
    { id: 1, username: 'Alice', email: 'alice@example.com', password: 'password123' },
    { id: 2, username: 'Bob', email: 'bob@example.com', password: 'password123' },
    { id: 3, username: 'Charlie', email: 'charlie@example.com', password: 'password123' },
  ];

  getAllUsers(): User[] {
    return this.users;
  }

  getUserById(id: number): User | undefined {
    return this.users.find(user => user.id === id);
  }

  createUser(user: User): void {
    this.users.push(user);
  }

  updateUser(id: number, updatedUser: Partial<User>): User | undefined {
    const userIndex = this.users.findIndex(user => user.id === id);
    if (userIndex !== -1) {
      this.users[userIndex] = { ...this.users[userIndex], ...updatedUser };
      return this.users[userIndex];
    }
    return undefined;
  }

  deleteUser(id: number): boolean {
    const userIndex = this.users.findIndex(user => user.id === id);
    if (userIndex !== -1) {
      this.users.splice(userIndex, 1);
      return true;
    }
    return false;
  }

  findUserByEmail(email: string): User | undefined {
    return this.users.find(user => user.email === email);
  }
}
