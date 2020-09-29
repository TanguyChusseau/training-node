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
router.get('/tasks', async (ctx) => {
  ctx.body = tasks
})

router.del('/tasks/:id', async (req) => {
  console.log(' id :', req.params.id)
  tasks = tasks.filter(({ id }) => id !== req.params.id)
  console.log(' newTasks :', tasks)
})

server.use(async (ctx) => {
  ctx.body = { msg: 'Training Node API!' }
})

server.listen(3001, () => console.log('Server is started on Port 3001'))
