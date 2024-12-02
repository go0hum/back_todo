import {Router} from 'express';
import { TaskController } from '../controllers/TaskController';
import { body, param } from 'express-validator';
import { handleInputErrors } from '../middleware/validation';
import { taskExist } from '../middleware/task';

const router = Router();

router.post('/',
    body('taskname')
        .notEmpty().withMessage('The task cannot be empty'),
    body('description')
        .notEmpty().withMessage('The description cannot be empty'),
    handleInputErrors,
    TaskController.createTask
);

router.get('/',TaskController.getTasks);

router.param('id', taskExist);

router.get('/:id', 
    param('id').isMongoId().withMessage('Invalid ID'),
    handleInputErrors, 
    TaskController.getTaskById
);
router.put('/:id', 
    param('id').isMongoId().withMessage('Invalid ID'),
    body('taskname')
        .notEmpty().withMessage('The task cannot be empty'),
    body('description')
        .notEmpty().withMessage('The description cannot be empty'),
    handleInputErrors, 
    TaskController.updateTask
);
router.delete('/:id', 
    param('id').isMongoId().withMessage('Invalid ID'),
    handleInputErrors, 
    TaskController.deleteTask
);
router.post('/:id/status', 
    param('id').isMongoId().withMessage('Invalid ID'),
    body('status')
        .notEmpty().withMessage('The status is required'),
    handleInputErrors, 
    TaskController.updateStatus
);

export default router;