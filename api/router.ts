import * as Router from 'koa-router'
import { createFactory } from './container'

const router = new Router()
let taskController = createFactory().taskController

// GET route to retrieve the tasks list
router.get('/tasks', ({ request }) => {
  taskController.getTasks(request)
})

// POST route to add a task
router.post('/tasks', ({ request }) => {
  taskController.addTask(request)
})

// DELETE route to delete a task with a matching id
router.delete('/tasks/:id', ({ request }) => {
  taskController.deleteTask(request)
})
export default router
