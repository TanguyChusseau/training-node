const Koa = require('koa')
const Router = require('koa-router')
const bodyParser = require('koa-bodyparser')
const json = require('koa-json')

const app = new Koa()
const router = new Router()

const tasks = [
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

app.use(json())
app.use(bodyParser())
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
  res.body = tasks.filter(({ id }) => id !== parseInt(res.params.id, 10))
})

app.listen(3001, () => {
  console.info('Server Started') // eslint-disable-line no-console
})
