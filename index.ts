import * as Koa from 'koa'
import * as Router from 'koa-router'

import * as bodyParser from 'koa-bodyparser'
import * as cors from '@koa/cors'
import * as json from 'koa-json'
import { Task } from './model/task'

const app = new Koa()
const router = new Router()

let tasks: Task[] = [
  {
    id: 1,
    label: 'Groceries'
  },
  {
    id: 2,
    label: 'Training Vue'
  },
  {
    id: 3,
    label: 'Training Node'
  }
]

app.use(bodyParser())
app.use(cors())
app.use(json())
app.use(router.routes())

// GET route to retrieve the tasks list
router.get('/tasks', (request: any) => {
  request.body = tasks
})

// POST route to add a task
router.post('/tasks', (request: any) => {
  tasks.push(request.request.body)
  request.body = tasks
})

// DELETE route to delete a task with a matching id
router.delete('/tasks/:id', (request: any) => {
  tasks = tasks.filter(({ id }) => id !== parseInt(request.params.id, 10))
  request.body = tasks
})

app.listen(3001, () => {
  console.info('Server Started')
})
