import * as Router from 'koa-router'
import { taskController } from './controller/task-controller'

const router = new Router()

// GET route to retrieve the tasks list
router.get('/tasks', (request) => {
  taskController.getTasks(request)
})

// POST route to add a task
router.post('/tasks', (request) => {
  taskController.addTask(request)
})

// DELETE route to delete a task with a matching id
router.delete('/tasks/:id', (request) => {
  taskController.deleteTask(request)
})
