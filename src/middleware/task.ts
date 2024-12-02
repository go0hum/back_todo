import type {NextFunction, Request, Response } from 'express';
import Task, {ITask} from '../models/Task';

declare global {
    namespace Express {
        interface Request {
            task: ITask
        }
    }
}

export async function taskExist(req: Request, res: Response, next: NextFunction) {
    try {
        const { id } = req.params;
        const task = await Task.findById(id);
        if (!task) {
            const error = new Error('Task not found');
            res.status(404).json({error: error.message});
        }
        req.task = task;
        next();
    } catch(error) {
        res.status(500).json({error: 'There was an error.'});
    }
}