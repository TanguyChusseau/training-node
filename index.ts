import * as Koa from 'koa'
import * as bodyParser from 'koa-bodyparser'
import * as cors from '@koa/cors'
import * as json from 'koa-json'
import router from './api/router'

const app = new Koa()

app.use(bodyParser())
app.use(cors())
app.use(json())
app.use(router.routes())

const SERVER_PORT = 3001
app.listen(SERVER_PORT, () => {
  console.info(`Server Started on port ${SERVER_PORT}`)
})
