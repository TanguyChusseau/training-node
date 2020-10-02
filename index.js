const Koa = require('koa')
const Router = require('koa-router')
const bodyParser = require('koa-bodyparser')
const cors = require('@koa/cors')
const json = require('koa-json')

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
router.get('/tasks', (res) => {
  res.body = tasks
})

// POST route to add a task
router.post('/tasks', (ctx) => {
  tasks.push(ctx.request.body)
  ctx.body = tasks
})

// DELETE route to delete a task with a matching id
router.delete('/tasks/:id', async (res) => {
  tasks = tasks.filter(({ id }) => id !== parseInt(res.params.id, 10))
  res.body = tasks
})

app.listen(3001, () => {
  console.info('Server Started')
})
