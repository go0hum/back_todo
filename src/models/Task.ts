import mongoose, {Schema, Document} from 'mongoose';

const taskStatus = {
    PENDING: 'pending',
    INPROGRESS: 'inProgress',
    COMPLETED: 'completed'
} as const;

export type TaskStatus = typeof taskStatus[keyof typeof taskStatus];

export interface ITask extends Document {
    taskname: string,
    description: string,
    status: TaskStatus
}

const TaskSchema: Schema = new Schema({
    taskname: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true,
        trim: true
    },
    status: {
        type: String,
        enum: Object.values(taskStatus),
        default: taskStatus.PENDING
    }
}, {timestamps: true})

const Task = mongoose.model<ITask>('Task', TaskSchema);
export default Task;