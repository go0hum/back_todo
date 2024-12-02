import type {Request, Response} from 'express';
import Task from '../models/Task';

export class TaskController {
    static createTask = async (req: Request, res: Response) => {
        try {
            const task = new Task(req.body);
            await task.save();
            res.send("Task created successfully");
        } catch(error) {
            console.log(error);
        }
    }

    static getTasks = async (req: Request, res: Response) => {
        try {

            const tasks = await Task.find({});
            res.json(tasks);
        } catch(error) {
            res.status(500).json({error : 'There was an error.'});
        }
    }

    static getTaskById = async (req: Request, res: Response) => {
        try {
            res.json(req.task);
        } catch (error) {
            res.status(500).json({error : 'There was an error.'});
        }
    }

    static updateTask = async (req: Request, res: Response) => {
        try {
            req.task.taskname = req.body.taskname;
            req.task.description = req.body.description;
            await req.task.save();
            res.send('Task updated!!');
        } catch (error) {
            res.status(500).json({error : 'There was an error.'});
        }
    }

    static deleteTask = async (req: Request, res: Response) => {
        try {
            await req.task.deleteOne();
            res.send('Task deleted!!');
        } catch (error) {
            res.status(500).json({error : 'There was an error.'});
        }
    }

    static updateStatus = async (req: Request, res: Response) => {
        try {
            const { status } = req.body;
            req.task.status = status;
            await req.task.save();
            res.send('Task updated!!');
        } catch (error) {
            res.status(500).json({error : 'There was an error.'});
        }
    }
}