import * as Koa from 'koa'
import * as Router from 'koa-router'

import * as bodyParser from 'koa-bodyparser'
import * as cors from '@koa/cors'
import * as json from 'koa-json'

const app = new Koa()
const router = new Router()

let tasks = [
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
router.get('/tasks', (res: any) => {
  res.body = tasks
})

// POST route to add a task
router.post('/tasks', (ctx: any) => {
  tasks.push(ctx.request.body)
  ctx.body = tasks
})

// DELETE route to delete a task with a matching id
router.delete('/tasks/:id', (res: any) => {
  tasks = tasks.filter(({ id }) => id !== parseInt(res.params.id, 10))
  res.body = tasks
})

app.listen(3001, () => {
  console.info('Server Started')
})
