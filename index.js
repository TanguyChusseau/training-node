const Koa = require('koa')
const Json = require('koa-json')
const KoaRouter = require('koa-router')

const server = new Koa()
const router = new KoaRouter()
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

server.use(Json())
server.use(router.routes())

// Get route to retrieve the tasks list
router.get('/tasks', async (res) => {
  res.body = tasks
})

// Delete route to delete a task with a matching id
router.delete('/tasks/:id', async (res) => {
  tasks = tasks.filter(({ id }) => id !== parseInt(res.params.id, 10))
  res.body = tasks
})

server.use(async (ctx) => {
  ctx.body = { msg: 'Training Node API!' }
})

server.listen(3001)
