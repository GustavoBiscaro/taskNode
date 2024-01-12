const express = require('express');

const router = express.Router();

const tasksController = require('./controladores/tasksController');
const tasksMiddleware = require('./middlewares/taskMiddleware');


router.get('/tasks',tasksController.getAll);
router.post('/tasks',tasksMiddleware.validateFieldTitle,tasksController.createTask);
router.delete('/tasks/:id', tasksController.deleteTask);
router.put('/tasks/:id',
  tasksMiddleware.validateFieldTitle,
  tasksMiddleware.validateFieldStatus,
  tasksController.updateTask,
);

module.exports = router;