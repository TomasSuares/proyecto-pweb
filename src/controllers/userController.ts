import { Request, Response } from 'express';
import { UserService } from '../services/userService';
import { User } from '../models/userModel';

const userService = new UserService();

export const getAllUsers = (req: Request, res: Response): void => {
  const users = userService.getAllUsers();
  res.json(users);
};

export const getUserById = (req: Request, res: Response): void => {
  const id = parseInt(req.params.id, 10);
  const user = userService.getUserById(id);
  if (user) {
    res.json(user);
  } else {
    res.status(404).send('User not found');
  }
};

export const createUser = (req: Request, res: Response): void => {
  const newUser: User = req.body;
  userService.createUser(newUser);
  res.status(201).json(newUser);
};

export const updateUser = (req: Request, res: Response): void => {
  const id = parseInt(req.params.id, 10);
  const updatedUser: Partial<User> = req.body;
  const user = userService.updateUser(id, updatedUser);
  if (user) {
    res.json(user);
  } else {
    res.status(404).send('User not found');
  }
};

export const deleteUser = (req: Request, res: Response): void => {
  const id = parseInt(req.params.id, 10);
  const success = userService.deleteUser(id);
  if (success) {
    res.status(204).send();
  } else {
    res.status(404).send('User not found');
  }
};
