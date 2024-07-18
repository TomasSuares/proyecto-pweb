import { Request, Response } from 'express';
import { Event } from '../models/eventModels';

let events: Event[] = [];

export const getAllEvents = (req: Request, res: Response) => {
    res.status(200).json(events);
};

export const createEvent = (req: Request, res: Response) => {
    const { title, description, date, location, imageUrl } = req.body;
    const newEvent: Event = {
        id: Math.random().toString(36).substr(2, 9), // Temporary ID generation
        title,
        description,
        date,
        location,
        imageUrl
    };
    events.push(newEvent);
    res.status(201).json(newEvent);
};
