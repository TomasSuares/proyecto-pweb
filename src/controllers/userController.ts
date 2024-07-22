import { Request, Response } from 'express';
import { UserService } from '../services/userService';

const userService = new UserService();

export const getAllUsers = (req: Request, res: Response) => {
  const users = userService.getAllUsers();
  res.json(users);
};

export const getUserById = (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const user = userService.getUserById(id);
  if (user) {
    res.json(user);
  } else {
    res.status(404).send('User not found');
  }
};

export const createUser = (req: Request, res: Response) => {
  const newUser = req.body;
  userService.createUser(newUser);
  res.status(201).json(newUser);
};

export const updateUser = (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const updatedUser = req.body;
  const user = userService.updateUser(id, updatedUser);
  if (user) {
    res.json(user);
  } else {
    res.status(404).send('User not found');
  }
};

export const deleteUser = (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const success = userService.deleteUser(id);
  if (success) {
    res.status(204).send();
  } else {
    res.status(404).send('User not found');
  }
};

export const findUserByEmail = (req: Request, res: Response) => {
  const email = req.params.email;
  const user = userService.findUserByEmail(email);
  if (user) {
    res.json(user);
  } else {
    res.status(404).send('User not found');
  }
};
