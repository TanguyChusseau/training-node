const Koa = require('koa')
const Json = require('koa-json')
const KoaRouter = require('koa-router')
const server = new Koa()
const router = new KoaRouter()

server.use(Json())

server.use(router.routes())

router.get('/tasks', async ctx => ctx.body = 'Tasks List')

server.use(async ctx =>
    ctx.body = {'msg': 'Training Node API!'})

server.listen(3001, () => console.log(' Server is started on Port 3001'))
