const Koa = require('koa')
const Json = require('koa-json')
const KoaRouter = require('koa-router')

const server = new Koa()
const router = new KoaRouter()
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

server.use(Json())
server.use(router.routes())

// Get route to retrieve the tasks list
router.get('/tasks', async (ctx) => {
  ctx.body = tasks
})

server.use(async (ctx) => {
  ctx.body = { msg: 'Training Node API!' }
})

server.listen(3001, () => console.log('Server is started on Port 3001'))
