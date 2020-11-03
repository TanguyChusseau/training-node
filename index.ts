import * as Koa from 'koa'
import * as Router from 'koa-router'
import * as bodyParser from 'koa-bodyparser'
import * as cors from '@koa/cors'
import * as json from 'koa-json'

import { Task } from './model/task'

const app = new Koa()
const router = new Router()

app.use(bodyParser())
app.use(cors())
app.use(json())
app.use(router.routes())

const SERVER_PORT = 3001
app.listen(SERVER_PORT, () => {
  console.info(`Server Started on port ${SERVER_PORT}`)
})
